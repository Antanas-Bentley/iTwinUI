/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { MenuExtraContent } from '../Menu/MenuExtraContent.js';
import type { SelectOption } from '../Select/Select.js';
import { SelectTag } from '../Select/SelectTag.js';
import { Text } from '../Typography/Text.js';
import type { Input } from '../Input/Input.js';
import {
  mergeRefs,
  useLatestRef,
  useLayoutEffect,
  AutoclearingHiddenLiveRegion,
  useId,
  useControlledState,
} from '../../utils/index.js';
import { usePopover } from '../Popover/Popover.js';
import type { InputContainerProps, CommonProps } from '../../utils/index.js';
import { ComboBoxRefsContext, ComboBoxStateContext } from './helpers.js';
import { ComboBoxEndIcon } from './ComboBoxEndIcon.js';
import { ComboBoxInput } from './ComboBoxInput.js';
import { ComboBoxInputContainer } from './ComboBoxInputContainer.js';
import { ComboBoxMenu } from './ComboBoxMenu.js';
import { ComboBoxMenuItem } from './ComboBoxMenuItem.js';

// Type guard for enabling multiple
const isMultipleEnabled = <T,>(
  variable: (T | undefined) | (T[] | undefined),
  multiple: boolean,
): variable is T[] | undefined => {
  return multiple && (Array.isArray(variable) || variable === undefined);
};

// Type guard for user onChange
const isSingleOnChange = <T,>(
  onChange:
    | ((value: T) => void)
    | ((value: T[], event?: MultipleOnChangeProps<T>) => void)
    | undefined,
  multiple: boolean,
): onChange is ((value: T) => void) | undefined => {
  return !multiple;
};

type ActionType = 'added' | 'removed';
type MultipleOnChangeProps<T> = {
  value: T;
  type: ActionType;
};

export type ComboboxMultipleTypeProps<T> =
  | {
      /**
       * Enable multiple selection.
       * @default false
       */
      multiple?: false;
      /**
       * Controlled value of ComboBox.
       * If `multiple` is enabled, it is an array of values.
       *
       * Pass `null` to reset the value.
       */
      value?: T | null;
      /**
       * Callback fired when selected value changes.
       */
      onChange?: (value: T) => void;
    }
  | {
      multiple: true;
      value?: T[] | null;
      onChange?: (value: T[], event: MultipleOnChangeProps<T>) => void;
    };

export type ComboBoxProps<T> = {
  /**
   * Array of options that populate the dropdown list.
   */
  options: SelectOption<T>[];
  /**
   * Message shown below the combobox.
   * Use `StatusMessage` component.
   */
  message?: React.ReactNode;
  /**
   * Function to customize the default filtering logic.
   */
  filterFunction?: (
    options: SelectOption<T>[],
    inputValue: string,
  ) => SelectOption<T>[];
  /**
   * Native input element props.
   */
  inputProps?: React.ComponentProps<typeof Input>;
  /**
   * Props to customize dropdown menu behavior.
   */
  dropdownMenuProps?: React.ComponentProps<'div'>;
  /**
   * End icon props.
   */
  endIconProps?: React.ComponentProps<typeof ComboBoxEndIcon>;
  /**
   * Message shown when no options are available.
   * If `JSX.Element` is provided, it will be rendered as is and won't be wrapped with `MenuExtraContent`.
   * @default 'No options found'
   */
  emptyStateMessage?: React.ReactNode;
  /**
   * A custom item renderer can be specified to control the rendering.
   *
   * For keyboard navigation to work, the returned element should use the `id` provided by this function.
   * The `isFocused` state is calculated using this `id` and can be used for specifying the focus styling.
   * If a `MenuItem` is returned, then focus styling is automatically handled.
   */
  itemRenderer?: (
    option: SelectOption<T>,
    states: {
      isSelected: boolean;
      isFocused: boolean;
      id: string;
      index: number;
    },
  ) => JSX.Element;
  /**
   * If enabled, virtualization is used for the scrollable dropdown list.
   * Use it if you expect a very long list of items.
   * @default false
   * @beta
   */
  enableVirtualization?: boolean;
  /**
   * Callback fired when dropdown menu is opened.
   */
  onShow?: () => void;
  /**
   * Callback fired when dropdown menu is closed.
   */
  onHide?: () => void;
} & ComboboxMultipleTypeProps<T> &
  Pick<InputContainerProps, 'status'> &
  CommonProps;

/** Returns either `option.id` or derives a stable id using `idPrefix` and `option.label` (without whitespace) */
const getOptionId = (option: SelectOption<unknown>, idPrefix: string) => {
  return option.id ?? `${idPrefix}-option-${option.label.replace(/\s/g, '-')}`;
};

/**
 * ComboBox component that allows typing a value to filter the options in dropdown list.
 * Values can be selected either using mouse clicks or using the Enter key.
 * @example
 * <ComboBox
 *   options={[
 *     { label: 'Item 1', value: 1 },
 *     { label: 'Item 2', value: 2 },
 *     { label: 'Item 3', value: 3 },
 *   ]}
 *   onChange={() => {}}
 * />
 */
export const ComboBox = React.forwardRef(
  <T,>(
    props: ComboBoxProps<T>,
    forwardedRef: React.ForwardedRef<HTMLInputElement>,
  ) => {
    const idPrefix = useId();

    const {
      options,
      value: valueProp,
      onChange,
      filterFunction,
      inputProps,
      endIconProps,
      dropdownMenuProps,
      emptyStateMessage = 'No options found',
      itemRenderer,
      enableVirtualization = false,
      multiple = false,
      onShow: onShowProp,
      onHide: onHideProp,
      id = inputProps?.id ? `iui-${inputProps.id}-cb` : idPrefix,
      ...rest
    } = props;

    // Refs get set in subcomponents
    const inputRef = React.useRef<HTMLInputElement>(null);
    const menuRef = React.useRef<HTMLElement>(null);
    const onChangeProp = useLatestRef(onChange);
    const optionsRef = useLatestRef(options);

    // Record to store all extra information (e.g. original indexes), where the key is the id of the option
    const optionsExtraInfoRef = React.useRef<
      Record<string, { __originalIndex: number }>
    >({});

    // Clear the extra info when the options change so that it can be reinitialized below
    React.useEffect(() => {
      optionsExtraInfoRef.current = {};
    }, [options]);

    // Initialize the extra info only if it is not already initialized
    if (
      options.length > 0 &&
      Object.keys(optionsExtraInfoRef.current).length === 0
    ) {
      options.forEach((option, index) => {
        optionsExtraInfoRef.current[getOptionId(option, id)] = {
          __originalIndex: index,
        };
      });
    }

    const [value, setValue] = useControlledState<typeof valueProp>(
      valueProp,
      valueProp !== undefined ? valueProp : undefined,

      // we call onChangeProp manually after calling setSelected
      () => {},
    );

    /**
     * - When multiple is enabled, it is an array of indices.
     * - When multiple is disabled, it is a single index; -1 if no item is selected.
     */
    const selectedIndices = React.useMemo(() => {
      if (isMultipleEnabled(value, multiple)) {
        const indexArray: number[] = [];
        value?.forEach((value) => {
          const indexToAdd = options.findIndex(
            (option) => option.value === value,
          );
          if (indexToAdd > -1) {
            indexArray.push(indexToAdd);
          }
        });
        return indexArray;
      } else {
        return options.findIndex((option) => option.value === value);
      }
    }, [multiple, options, value]);

    const [isOpen, setIsOpen] = React.useState(false);
    const [focusedIndex, setFocusedIndex] = React.useState<number>(-1);

    const onShowRef = useLatestRef(onShowProp);
    const onHideRef = useLatestRef(onHideProp);

    const show = React.useCallback(() => {
      setIsOpen(true);
      onShowRef.current?.();
    }, [onShowRef]);

    const hide = React.useCallback(() => {
      setIsOpen(false);
      onHideRef.current?.();
    }, [onHideRef]);

    useLayoutEffect(() => {
      // When the dropdown opens
      if (isOpen) {
        inputRef.current?.focus(); // Focus the input
        // Reset the filtered list (does not reset when multiple enabled)
        if (!multiple) {
          setFilteredOptions(optionsRef.current);
          setFocusedIndex((selectedIndices as number | undefined) ?? -1);
        }
      }
      // When the dropdown closes
      else {
        // Reset the focused index
        setFocusedIndex(-1);
        // Reset/update the input value if not multiple
        if (!isMultipleEnabled(selectedIndices, multiple)) {
          setInputValue(
            selectedIndices >= 0
              ? optionsRef.current[selectedIndices]?.label
              : '',
          );
        }
      }
    }, [isOpen, multiple, optionsRef, selectedIndices]);

    // Update filtered options to the latest value options according to input value
    const [filteredOptions, setFilteredOptions] = React.useState(options);

    // To reconfigure internals whenever the options change
    React.useEffect(() => {
      // Remove the filter so that all of the new options are shown.
      setFilteredOptions(options);

      // If multiple=false, refocus the selected option.
      // If no option is selected (i.e. selectedIndices === -1), reset the focus to the input.
      if (!isMultipleEnabled(selectedIndices, multiple)) {
        setFocusedIndex(selectedIndices as number);
      }
      // If multiple=true, reset the focus to the input.
      else {
        setFocusedIndex(-1);
      }

      // Reset/update the input value if multiple=false and if the dropdown is closed (i.e. don't override user input when dropdown is open)
      if (!isMultipleEnabled(selectedIndices, multiple) && !isOpen) {
        setInputValue(
          selectedIndices >= 0
            ? optionsRef.current[selectedIndices]?.label
            : '',
        );
      }

      // Only need to call on options update
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options]);

    // Filter options based on input value
    const [inputValue, setInputValue] = React.useState<string>(
      inputProps?.value?.toString() ?? '',
    );

    const [liveRegionSelection, setLiveRegionSelection] = React.useState('');

    const handleOnInput = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setInputValue(value);
        show(); // reopen when typing
        setFilteredOptions(
          filterFunction?.(optionsRef.current, value) ??
            optionsRef.current.filter((option) =>
              option.label.toLowerCase().includes(value.toLowerCase()),
            ),
        );
        if (focusedIndex != -1) {
          setFocusedIndex(-1);
        }
        inputProps?.onChange?.(event);
      },
      [filterFunction, focusedIndex, inputProps, optionsRef, show],
    );

    const isMenuItemSelected = React.useCallback(
      (index: number) => {
        if (isMultipleEnabled(selectedIndices, multiple)) {
          return !!selectedIndices.includes(index as number);
        } else {
          return selectedIndices === index;
        }
      },
      [multiple, selectedIndices],
    );

    /**
     * Generates new array when item is added or removed. Only applicable when multiple is enabled.
     */
    const selectedChangeHandler = React.useCallback(
      (__originalIndex: number, action: ActionType, value: T[] | undefined) => {
        if (action === 'added') {
          return [...(value ?? []), optionsRef.current[__originalIndex]?.value];
        } else {
          return (value ?? []).filter(
            (item) => item !== optionsRef.current[__originalIndex]?.value,
          );
        }
      },
      [optionsRef],
    );

    /**
     * Calls user defined onChange
     */
    const onChangeHandler = React.useCallback(
      (
        __originalIndex: number,
        actionType?: ActionType,
        newArray?: T[] | undefined,
      ) => {
        if (isSingleOnChange(onChangeProp.current, multiple)) {
          onChangeProp.current?.(optionsRef.current[__originalIndex]?.value);
        } else {
          actionType &&
            newArray &&
            onChangeProp.current?.(newArray, {
              value: optionsRef.current[__originalIndex]?.value,
              type: actionType,
            });
        }
      },
      [multiple, onChangeProp, optionsRef],
    );

    const onClickHandler = React.useCallback(
      (__originalIndex: number) => {
        inputRef.current?.focus({ preventScroll: true }); // return focus to input

        if (optionsRef.current[__originalIndex]?.disabled) {
          return;
        }

        if (isMultipleEnabled(value, multiple)) {
          const actionType = isMenuItemSelected(__originalIndex)
            ? 'removed'
            : 'added';
          const newArray = selectedChangeHandler(
            __originalIndex,
            actionType,
            value,
          );
          setValue(newArray);
          onChangeHandler(__originalIndex, actionType, newArray);

          // update live region
          setLiveRegionSelection(
            newArray
              .map(
                (item) =>
                  optionsRef.current.find((o) => o.value === item)?.label,
              )
              .join(', '),
          );
        } else {
          setValue(optionsRef.current[__originalIndex]?.value);
          hide();
          onChangeHandler(__originalIndex);
        }
      },
      [
        setValue,
        selectedChangeHandler,
        isMenuItemSelected,
        multiple,
        onChangeHandler,
        value,
        optionsRef,
        hide,
      ],
    );

    const getMenuItem = React.useCallback(
      (option: SelectOption<T>, filteredIndex?: number) => {
        const optionId = getOptionId(option, id);
        const { __originalIndex } = optionsExtraInfoRef.current[optionId] ?? {
          __originalIndex: options.findIndex((o) => o.value === option.value),
        };
        const { icon, startIcon: startIconProp, ...restOptions } = option;

        const startIcon = startIconProp ?? icon;

        const customItem = itemRenderer
          ? itemRenderer(option, {
              isFocused: focusedIndex === __originalIndex,
              isSelected: Array.isArray(selectedIndices)
                ? selectedIndices.includes(__originalIndex)
                : selectedIndices === __originalIndex,
              index: __originalIndex,
              id: optionId,
            })
          : null;

        return customItem ? (
          React.cloneElement(customItem, {
            onClick: (e: unknown) => {
              onClickHandler(__originalIndex);
              customItem.props.onClick?.(e);
            },
            // ComboBox.MenuItem handles scrollIntoView, data-iui-index and focused through context
            // but we still need to pass them here for backwards compatibility with MenuItem
            focused: focusedIndex === __originalIndex,
            'data-iui-index': __originalIndex,
            'data-iui-filtered-index': filteredIndex,
            ref: mergeRefs(customItem.props.ref, (el: HTMLElement | null) => {
              if (!enableVirtualization && focusedIndex === __originalIndex) {
                el?.scrollIntoView({ block: 'nearest' });
              }
            }),
          })
        ) : (
          <ComboBoxMenuItem
            key={optionId}
            id={optionId}
            startIcon={startIcon}
            {...restOptions}
            isSelected={isMenuItemSelected(__originalIndex)}
            onClick={() => {
              onClickHandler(__originalIndex);
            }}
            index={__originalIndex}
            data-iui-filtered-index={filteredIndex}
          >
            {option.label}
          </ComboBoxMenuItem>
        );
      },
      [
        enableVirtualization,
        focusedIndex,
        id,
        isMenuItemSelected,
        itemRenderer,
        onClickHandler,
        options,
        selectedIndices,
      ],
    );

    const emptyContent = React.useMemo(
      () => (
        <>
          {React.isValidElement(emptyStateMessage) ? (
            emptyStateMessage
          ) : (
            <MenuExtraContent>
              <Text isMuted>{emptyStateMessage}</Text>
            </MenuExtraContent>
          )}
        </>
      ),
      [emptyStateMessage],
    );

    const popover = usePopover({
      visible: isOpen,
      onVisibleChange: (open) => (open ? show() : hide()),
      matchWidth: true,
      closeOnOutsideClick: true,
      interactions: { click: false, focus: true },
    });

    return (
      <ComboBoxRefsContext.Provider
        value={{ inputRef, menuRef, optionsExtraInfoRef }}
      >
        <ComboBoxStateContext.Provider
          value={{
            id,
            isOpen,
            focusedIndex,
            setFocusedIndex,
            onClickHandler,
            enableVirtualization,
            filteredOptions,
            getMenuItem,
            multiple,
            popover,
            show,
            hide,
          }}
        >
          <ComboBoxInputContainer
            ref={forwardedRef}
            disabled={inputProps?.disabled}
            {...rest}
          >
            <>
              <ComboBoxInput
                value={inputValue}
                disabled={inputProps?.disabled}
                {...inputProps}
                onChange={handleOnInput}
                selectTags={
                  isMultipleEnabled(value, multiple)
                    ? (value
                        ?.map((optionValue) => {
                          const option = optionsRef.current.find(
                            (o) => o.value === optionValue,
                          );
                          if (option == null) {
                            return undefined;
                          }

                          return (
                            <SelectTag
                              key={option.label}
                              label={option.label}
                            />
                          );
                        })
                        .filter(Boolean) as JSX.Element[])
                    : undefined
                }
              />
            </>
            <ComboBoxEndIcon
              {...endIconProps}
              disabled={inputProps?.disabled}
              isOpen={isOpen}
            />

            {multiple ? (
              <AutoclearingHiddenLiveRegion text={liveRegionSelection} />
            ) : null}
          </ComboBoxInputContainer>
          <ComboBoxMenu as='div' {...dropdownMenuProps}>
            {filteredOptions.length > 0 && !enableVirtualization
              ? filteredOptions.map(getMenuItem)
              : emptyContent}
          </ComboBoxMenu>
        </ComboBoxStateContext.Provider>
      </ComboBoxRefsContext.Provider>
    );
  },
) as <T>(
  props: ComboBoxProps<T> & { ref?: React.ForwardedRef<HTMLElement> },
) => JSX.Element;
