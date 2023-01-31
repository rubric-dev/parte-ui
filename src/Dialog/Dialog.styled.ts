import styled, { css, keyframes } from 'styled-components';
import { Box } from '../Layout';

const animationEasing = {
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)',
};

export const ANIMATION_DURATION = 200;

const openAnimation = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1
  }
`;

const closeAnimation = keyframes`
  from {
    transform: scale(1);
    opacity: 1
  }
  to {
    transform: scale(0.8);
    opacity: 0
  }
`;
export const DialogContainer = styled(Box)`
  ${({ theme }) => css`
    background-color: ${theme.colors.N0};
    display: flex;
    ${theme.elevation.elevation0}

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
export const Header = styled(Box)`
  width: 100%;
`;
export const Title = styled.h2`
  ${({ theme }) => css`
    ${theme.typography.H600};
    color: ${theme.colors.N900};
  `}
`;

export const Content = styled(Box)`
  ${({ theme }) => css`
    ${theme.typography.P200};
    color: ${theme.colors.N700};
    padding: ${theme.spacing.spacing8}px ${theme.spacing.spacing32}px;
    overflow: auto;
    width: 100%;
  `}
`;

export const Footer = styled(Box)`
  ${({ theme }) => css`
    padding: ${theme.spacing.spacing32}px;
    padding-top: ${theme.spacing.spacing24}px;
    justify-content: flex-end;
    width: 100%;
    gap: ${theme.spacing.spacing8}px;
  `}
`;
