import { TooltipProps } from './Tooltip.types';
import Positioner from '../Positioner/Positioner';
import { Position } from '../Positioner';
import * as Styled from './Tooltip.styled';
import { Fragment, useRef } from 'react';

const Tooltip = ({
  children,
  content,
  showDelay = 100,
  hideDelay = 100,
  position = Position.BOTTOM,
  isShown = true,
}: TooltipProps) => {
  const child: React.ReactNode =
    typeof content === 'string' ? <p>{content}</p> : content;

  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <Fragment>
      <Styled.TargetWrapper ref={targetRef}>{children}</Styled.TargetWrapper>
      {isShown && (
        <Positioner
          position={position}
          ref={targetRef}
          showDelay={showDelay}
          hideDelay={hideDelay}
        >
          <Styled.Content>{child}</Styled.Content>
        </Positioner>
      )}
    </Fragment>
  );
};

export default Tooltip;
