import styled, { css, keyframes } from 'styled-components';
import { Box } from '../Layout';

const ANIMATION_DURATION = 240;

export const ToastContainer = styled(Box)`
  ${() => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    z-index: 200;
    flex-direction: column;
    margin: 0 auto;
    max-width: 560px;
  `}
`;

const animationEasing = {
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)',
  spring: 'cubic-bezier(0.175, 0.885, 0.320, 1.175)',
};

const openAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-120%);
  }
  to {
    transform: translateY(0);
  }
`;

const closeAnimation = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.9);
    opacity: 0;
  }
  `;

export const ToastBox = styled(Box)<{ marginBottom: number; height: number }>`
  ${({ marginBottom, height }) => css`
    height: ${height}px;
    margin-bottom: ${marginBottom}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 0px;
    width: 100%;
    height: fit-content;
    transition: all ${ANIMATION_DURATION}ms ${animationEasing.deceleration};

    &[data-state='entering'] {
      animation: ${openAnimation} ${ANIMATION_DURATION}ms
        ${animationEasing.spring} both;
    }
    &[data-state='entered'] {
      animation: ${openAnimation} ${ANIMATION_DURATION}ms
        ${animationEasing.spring} both;
    }
    &[data-state='exiting'] {
      animation: ${closeAnimation} ${ANIMATION_DURATION}ms
        ${animationEasing.acceleration} both;
    }
  `}
`;
