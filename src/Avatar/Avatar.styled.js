import styled, { css } from 'styled-components';
import { getColors, getAvatarInitialsFontSize, } from '../common/utils/badge.utils';
import { Box } from '../Layout';
export const commonAvatarStyles = css `
  ${({ size = 32, shape = 'CIRCLE' }) => css `
    width: ${size}px;
    height: ${size}px;
    border-radius: ${shape === 'CIRCLE' ? '100%' : '4px'};
  `}
`;
export const Avatar = styled(Box) `
  ${({ avatarColor }) => css `
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    ${getColors(avatarColor)}
    ${commonAvatarStyles}
  `}
`;
export const Text = styled.span `
  ${({ size = 32 }) => css `
    color: inherit;
    font-size: ${getAvatarInitialsFontSize(size)}px;
    line-height: 16px;
    font-weight: 400;
  `}
`;
export const Image = styled.img `
  width: 100%;
  height: 100%;
`;
