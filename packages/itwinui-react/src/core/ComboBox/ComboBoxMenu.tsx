/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import cx from 'classnames';
import { Menu } from '../Menu/Menu.js';
import {
  useSafeContext,
  useMergedRefs,
  Portal,
  Box,
  useLayoutEffect,
} from '../../utils/index.js';
import type { PolymorphicForwardRefComponent } from '../../utils/index.js';
import { ComboBoxStateContext, ComboBoxRefsContext } from './helpers.js';
import { List } from '../List/List.js';
import { useVirtualizer } from '@tanstack/react-virtual';

type ComboBoxMenuProps = Omit<
  React.ComponentPropsWithoutRef<typeof Menu>,
  'onClick'
> &
  React.ComponentPropsWithoutRef<'div'>;

const VirtualizedComboBoxMenu = (props: React.ComponentProps<'div'>) => {
  const { children, ...rest } = props;
  const { filteredOptions, getMenuItem, focusedIndex } =
    useSafeContext(ComboBoxStateContext);
  const { menuRef } = useSafeContext(ComboBoxRefsContext);

  const virtualizer = useVirtualizer({
    // 'Fool' VirtualScroll by passing length 1
    // whenever there is no elements, to show empty state message
    count: filteredOptions.length || 1,
    getScrollElement: () => menuRef.current,
    estimateSize: () => 48,
    measureElement: (element) =>
      element.getAttribute('data-index') !== '0'
        ? element.getBoundingClientRect().height - 1
        : element.getBoundingClientRect().height,
  });

  const virtualItemRenderer = React.useCallback(
    (index: number) =>
      filteredOptions.length > 0
        ? getMenuItem(filteredOptions[index], index)
        : (children as JSX.Element), // Here is expected empty state content
    [filteredOptions, getMenuItem, children],
  );

  const focusedVisibleIndex = React.useMemo(() => {
    const currentElement = menuRef.current?.querySelector(
      `[data-iui-index="${focusedIndex}"]`,
    );
    if (!currentElement) {
      return focusedIndex;
    }

    return Number(
      currentElement.getAttribute('data-iui-filtered-index') ?? focusedIndex,
    );
  }, [focusedIndex, menuRef]);

  useLayoutEffect(() => {
    if (focusedVisibleIndex) {
      virtualizer.scrollToIndex(focusedVisibleIndex, { align: 'start' });
    }
  }, [focusedVisibleIndex, virtualizer]);

  return (
    <Box
      as='div'
      style={{
        minBlockSize: virtualizer.getTotalSize(),
        minInlineSize: '100%',
      }}
      {...rest}
    >
      {virtualizer.getVirtualItems().map((virtualItem) => {
        return React.cloneElement(virtualItemRenderer(virtualItem.index), {
          key: virtualItem.key,
          'data-index': virtualItem.index,
          ref: virtualizer.measureElement,
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            transform: `translateY(${virtualItem.start}px)`,
          },
        });
      })}
    </Box>
  );
};

export const ComboBoxMenu = React.forwardRef((props, forwardedRef) => {
  const { className, children, style, ...rest } = props;
  const { id, enableVirtualization, popover } =
    useSafeContext(ComboBoxStateContext);
  const { menuRef } = useSafeContext(ComboBoxRefsContext);

  const refs = useMergedRefs(popover.refs.setFloating, forwardedRef, menuRef);

  return (
    popover.open && (
      <Portal portal>
        <List
          as='div'
          className={cx('iui-menu', className)}
          id={`${id}-list`}
          role='listbox'
          ref={refs}
          {...popover.getFloatingProps({
            style: !enableVirtualization
              ? style
              : ({
                  // set as constant because we don't want it shifting when items are unmounted
                  maxInlineSize: 0,

                  ...style,
                } as React.CSSProperties),
            ...rest,
          })}
        >
          {!enableVirtualization ? (
            children
          ) : (
            <VirtualizedComboBoxMenu>{children}</VirtualizedComboBoxMenu>
          )}
        </List>
      </Portal>
    )
  );
}) as PolymorphicForwardRefComponent<'div', ComboBoxMenuProps>;
ComboBoxMenu.displayName = 'ComboBoxMenu';
