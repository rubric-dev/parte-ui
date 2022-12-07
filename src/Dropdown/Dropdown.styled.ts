import styled, { css } from 'styled-components';
import { Box } from '../Layout';

export const Dropdown = styled(Box)`
  ${({ theme }) => css`
    width: fit-content;
    border: 1px solid ${theme.colors.B100};
    box-sizing: border-box;
    overflow: hidden;
    ${theme.elevation.elevation2};
  `}
  flex-direction: column;

  overflow: auto;
  max-height: 200px;
`;
export const Container = styled.div`
  ${() => css`
    position: relative;
    display: flex;
    width: fit-content;
  `}
`;

export const Trigger = styled.div`
  ${({ theme }) => {
    return css`
      width: fit-content;
      height: fit-content;
    `;
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
