import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { Box } from '../../Layout';
import { DropdownListProps } from './DropdownList.types';

export const List = styled(Box)`
  ${({ theme }) => {
    return css`
      box-sizing: border-box;
      border: 1px solid ${theme.colors.N300};
      border-radius: 4px;
      ${theme.elevation.elevation2};
      display: flex;
      max-height: 273px;
      width: fit-content;
      flex-direction: column;
      overflow-x: hidden;
      overflow-y: auto;
    `;
  }}
`;
