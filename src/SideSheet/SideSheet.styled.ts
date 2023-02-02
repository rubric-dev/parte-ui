import styled, { css, keyframes } from 'styled-components';
import { Box } from '../Layout';

const animationEasing = {
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)',
};

const ANIMATION_DURATION = 240;

const openAnimation = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;
const closeIconOpenAnimation = keyframes`
  from { transform: translateX(100%) rotate(0deg) }
  to { transform: translateX(-100%) rotate(-360deg) }
`;

const closeAnimation = keyframes`
  from { transform: translateX(0) }
  to { transform: translateX(100%) }
`;
const closeIconCloseAnimation = keyframes`
  from { transform: translateX(-100%) rotate(0deg) }
  to { transform: translateX(100%) rotate(360deg) }
`;

export const Container = styled(Box)`
  ${({ theme }) => css`
    position: absolute;
    max-width: 100vw;
    height: 100vh;
    right: 0;
    left: auto;
    transform: translateX(-100%);
    ${theme.elevation.elevation3}

    &[data-state='entering'] {
      animation: ${openAnimation} ${ANIMATION_DURATION}ms
        ${animationEasing.deceleration} both;
    }
    &[data-state='entered'] {
      animation: ${openAnimation} ${ANIMATION_DURATION}ms
        ${animationEasing.deceleration} both;
    }
    &[data-state='exiting'] {
      animation: ${closeAnimation} ${ANIMATION_DURATION}ms
        ${animationEasing.acceleration} both;
    }
  `}
`;

export const Content = styled(Box)`
  ${({ theme }) => css`
    background-color: ${theme.colors.N0};
    overflow: auto;
    max-height: 100vh;
    height: 100vh;
  `}
`;

export const Close = styled(Box)`
  ${({ theme }) => css`
    padding: ${theme.spacing.spacing4}px;
    border-radius: 50%;
    position: absolute;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.4);
    transition: background-color 120ms;

    left: 0;
    margin-left: -${theme.spacing.spacing12}px;
    margin-top: ${theme.spacing.spacing12}px;
    transform: translateX(-100%);

    svg {
      color: ${theme.colors.N0};
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.6);
    }
    &:active {
      background-color: rgba(255, 255, 255, 0.4);
    }
    &[data-state='entering'] {
      animation: ${closeIconOpenAnimation} ${ANIMATION_DURATION}ms
        ${animationEasing.deceleration} both;
    }
    &[data-state='entered'] {
      animation: ${closeIconOpenAnimation} ${ANIMATION_DURATION}ms
        ${animationEasing.deceleration} both;
    }
    &[data-state='exiting'] {
      animation: ${closeIconCloseAnimation} ${ANIMATION_DURATION}ms
        ${animationEasing.acceleration} both;
    }
  `}
`;
