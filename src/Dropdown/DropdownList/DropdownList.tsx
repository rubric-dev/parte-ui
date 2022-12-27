import { DropdownListProps } from './DropdownList.types';
import * as Styled from './DropdownList.styled';
import { forwardRef } from 'react';
import ActionSearchIcon from '../../parte-icons/Icons/ActionSearchIcon';
import { SelectRow } from '../SelectRow';

const DropdownList = forwardRef<HTMLDivElement, DropdownListProps>(
  ({ options }: DropdownListProps, ref) => {
    return (
      <Styled.List ref={ref}>
        {options.map(({ label, value }, index) => (
          <SelectRow key={label} label={label} />
        ))}
      </Styled.List>
    );
  }
);

export default DropdownList;
