import styled, { css } from 'styled-components';
import Button from '../Button';
import { Box } from '../Layout';

export const Container = styled(Box)`
  ${() => css`
    width: fit-content;
    border-radius: 4px;
  `}
`;

export const FilePickerInput = styled(Box)<{ focused: boolean }>`
  ${({ focused }) => css`
    & input {
      max-width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    & div#parte-text-input-wrapper {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      ${focused &&
      css`
        z-index: 2;
      `}
    }
  `}
`;

export const FilePickerButton = styled(Button)`
  ${({ theme }) => css`
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    margin-left: -1px;
    z-index: 1;
    ${theme.typography.C200};
  `}
`;

export const LabelWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    column-gap: ${theme.spacing.spacing2}px;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    ${theme.typography.H400}
    color: ${theme.colorHeading};
  `}
`;
