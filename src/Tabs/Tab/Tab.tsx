import { forwardRef } from 'react';
import * as Styled from './Tab.styled';
import { TabProps } from './Tab.types';

const Tab = forwardRef<HTMLButtonElement, TabProps>((props: TabProps, ref) => {
  const {
    leftSlot,
    rightSlot,
    children,
    variant = 'Primary',
    direction = 'horizontal',
  } = props;

  return (
    <Styled.Tab
      ref={ref}
      type="button"
      {...props}
      variant={variant}
      direction={direction}
    >
      {leftSlot}
      {children}
      {rightSlot}
    </Styled.Tab>
  );
});

export default Tab;
