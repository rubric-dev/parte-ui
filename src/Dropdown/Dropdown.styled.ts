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
