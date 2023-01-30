import styled, { css } from 'styled-components';
import { Box } from '../Layout';

export const Container = styled.div`
  ${() => css`
    position: relative;
    display: flex;
    width: fit-content;
  `}
`;

export const Trigger = styled.div`
  ${({ theme }) => {
    return css``;
  }}
`;

export const Menu = styled(Box)<{ hidden: boolean; usePortal?: boolean }>`
  ${({ theme, hidden, usePortal }) => {
    return css`
      opacity: ${hidden ? 0 : 100};
      position: ${usePortal ? 'fixed' : 'absolute'};
      height: fit-content;
    `;
  }}
`;
