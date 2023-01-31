import styled, { css, keyframes } from 'styled-components';
import { Box } from '../Layout';

const animationEasing = {
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)',
};

export const ANIMATION_DURATION = 240;

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const BackDrop = styled(Box)`
  ${() => css`
    background: rgba(67, 90, 111, 0.7);
    box-sizing: border-box;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 100;

    &[data-state='entering'] {
      animation: ${fadeInAnimation} ${ANIMATION_DURATION}ms
        ${animationEasing.deceleration} both;
    }
    &[data-state='entered'] {
      animation: ${fadeInAnimation} ${ANIMATION_DURATION}ms
        ${animationEasing.deceleration} both;
    }
    &[data-state='exiting'] {
      animation: ${fadeOutAnimation} ${ANIMATION_DURATION}ms
        ${animationEasing.acceleration} both;
    }
    &[data-state='exited'] {
      animation: ${fadeOutAnimation} ${ANIMATION_DURATION}ms
        ${animationEasing.acceleration} both;
    }
  `}
`;
