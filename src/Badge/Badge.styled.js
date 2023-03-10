import styled, { css } from 'styled-components';
import { getColors } from '../common/utils/badge.utils';
import { Box } from '../Layout';
export const commonBadgeStyles = css `
  ${({ theme }) => css `
    width: fit-content;
    padding: 0px ${theme.spacing.spacing6}px;
  `}
`;
export const Badge = styled(Box) `
  ${({ badgeColor, type = 'badge' }) => css `
    display: flex;
    border-radius: ${type === 'badge' ? '4px' : '8px'};
    ${getColors(badgeColor)}
    ${commonBadgeStyles}
  `}
`;
export const Text = styled.span `
  ${() => css `
    font-weight: 600;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.2px;
  `}
`;
