/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { render } from '@testing-library/react';
import * as React from 'react';
import type { CellRendererProps } from '@itwin/itwinui-react/react-table';
import { DefaultCell } from './DefaultCell.js';

const renderComponent = (
  props?: Partial<React.ComponentProps<typeof DefaultCell>>,
) => {
  const dummyTableCellRenderedProps = {
    cellElementProps: {
      className: 'iui-table-cell',
      style: {
        boxSizing: 'border-box',
        flex: '1 1 145px',
        minWidth: '72px',
        width: '0px',
      },
    },
    cellProps: {
      column: {
        id: 'id',
      },
      value: 'cell value',
    },
  } as CellRendererProps<any>;

  return render(<DefaultCell {...dummyTableCellRenderedProps} {...props} />);
};

it('should merge className/style with cellElementProps', () => {
  const { container } = renderComponent({
    className: 'test-class',
    style: { color: 'red' },
  });

  const cellElement = container.querySelector('.iui-table-cell') as HTMLElement;
  expect(cellElement).toBeTruthy();
  expect(cellElement.classList.contains('test-class')).toBe(true);
  expect(cellElement.style.color).toBe('red');
});
