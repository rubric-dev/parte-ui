import { memo } from 'react';
import { Paragraph } from '../@foundations/Typography';
import { Dropdown } from '../Dropdown';
import { Box } from '../Layout';
import { BoxProps } from '../Layout/Box.types';
import { Menu } from '../Menu';
import ActionFilterIcon from '../parte-icons/Icons/ActionFilterIcon';
import InterfaceCaretDownIcon from '../parte-icons/Icons/InterfaceCaretDownIcon';
import * as Styled from './Table.styled';
import {
  BodyProps,
  CellProps,
  FilterHeaderProps,
  HeaderCellProps,
  HeaderContainerProps,
  HeaderRowProps,
  RowProps,
  TableFilterBarProps,
} from './Table.types';

const Table = ({ children, direction = 'column', ...args }: BoxProps) => {
  return (
    <Styled.Table direction={direction} {...args}>
      {children}
    </Styled.Table>
  );
};
const HeaderContainer = ({
  children,
  direction = 'column',
  ...args
}: HeaderContainerProps) => {
  return (
    <Styled.HeaderContainer direction={direction} {...args}>
      {children}
    </Styled.HeaderContainer>
  );
};
const Body = ({ children, direction = 'column', ...args }: BodyProps) => {
  return (
    <Styled.Body direction={direction} {...args}>
      {children}
    </Styled.Body>
  );
};
const HeaderRow = ({ children, ...args }: HeaderRowProps) => {
  return <Styled.HeaderRow {...args}>{children}</Styled.HeaderRow>;
};
const Row = ({ children, onSelect, ...args }: RowProps) => {
  return (
    <Styled.Row onClick={onSelect} {...args}>
      {children}
    </Styled.Row>
  );
};

export const HeaderCell = memo(
  ({
    children,
    alignItems = 'Center',
    height = 48,
    padding = 8,
    ...args
  }: HeaderCellProps) => {
    return (
      <Styled.HeaderCell
        alignItems={alignItems}
        height={height}
        padding={padding}
        {...args}
      >
        {children}
      </Styled.HeaderCell>
    );
  }
);

export const Cell = memo(
  ({
    children,
    alignItems = 'Center',
    height = 64,
    padding = 8,
    ...args
  }: CellProps) => {
    return (
      <Styled.Cell
        alignItems={alignItems}
        height={height}
        padding={padding}
        {...args}
      >
        {children}
      </Styled.Cell>
    );
  }
);

export const TableFilterBar = ({ onClear, countInfo }: TableFilterBarProps) => {
  const countText = countInfo
    ? `${countInfo.currentCount}/${countInfo.totalCount} fields shown. `
    : '';
  return (
    <Styled.TableFilterBar>
      <ActionFilterIcon size={16} />
      <Paragraph size={100} color="N700">
        {`Filter Aplied. ${countText}`}
        <Styled.ClearFilter type="button" onClick={onClear}>
          Clear filter
        </Styled.ClearFilter>
      </Paragraph>
    </Styled.TableFilterBar>
  );
};

export const FilterHeader = <T, K>({
  column,
  options,
  children,
}: FilterHeaderProps<T, K>) => {
  const filter = column.getFilterValue();
  const prevFilter = column.getFilterValue();
  const columnId = column.id;

  const renderOptions =
    options ??
    Array.from(column.getFacetedUniqueValues().keys())
      .sort()
      .map((item) => ({
        label: item,
        value: item,
      }));

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Box alignItems="Center" gap={4} style={{ cursor: 'pointer' }}>
          {children ?? columnId}
          <InterfaceCaretDownIcon size={16} />
        </Box>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        {({ onClose }) => (
          <Menu>
            <Menu.Group title="Filter">
              {renderOptions.map(({ value, label }) => (
                <Menu.Row
                  key={label}
                  onSelect={() => {
                    column.setFilterValue(
                      prevFilter === value ? undefined : value
                    );
                    onClose?.();
                  }}
                  selected={value === filter}
                >
                  {label}
                </Menu.Row>
              ))}
            </Menu.Group>
          </Menu>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

Table.HeaderContainer = HeaderContainer;
Table.Body = Body;
Table.HeaderRow = HeaderRow;
Table.Row = Row;
Table.HeaderCell = HeaderCell;
Table.Cell = Cell;

export default Table;
