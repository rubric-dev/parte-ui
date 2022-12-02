import styled, { css } from 'styled-components';
import { Box } from '../../Layout';
import { StepProps, StepStatus } from './Step.types';

export const Container = styled(Box)`
  ${({ theme }) => css`
    width: fit-content;
    align-items: center;
    user-select: none;
  `}
`;
export const Icon = styled(Box)<{ status: StepStatus }>`
  ${({ theme, status }) => css`
    justify-content: center;
    width: 16px;
    height: 16px;
    align-items: center;
    border-radius: 4px;
    // 타이포그래피에 없는 글자 포맷이네요
    font-weight: 600;
    font-size: 10px;
    line-height: 8px;

    ${status === 'notStarted' &&
    css`
      color: ${theme.colors.N700};
      background-color: ${theme.colors.N200};
    `}
    ${status === 'inProgress' &&
    css`
      color: ${theme.colors.B500};
      background-color: ${theme.colors.B200};
    `}
      ${status === 'complete' &&
    css`
      color: ${theme.colors.G400};
      background-color: ${theme.colors.G200};
    `}
  `}
`;
export const Label = styled.span<{ status: StepStatus }>`
  ${({ theme }) => css`
    ${theme.typography.H300}
    color: ${theme.colors.N700}
  `}
`;
