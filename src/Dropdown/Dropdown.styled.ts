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
export const Container = styled(Box)`
  ${() => css`
    position: relative;
  `}
`;

export const Trigger = styled(Box)`
  ${({ theme }) => {
    return css``;
  }}
`;

export const Menu = styled(Box)<{ hidden: boolean }>`
  ${({ theme, hidden }) => {
    return css`
      opacity: ${hidden ? 0 : 100};
      position: absolute;
      height: fit-content;
      top: 0;
      left: 0;
    `;
  }}
`;
