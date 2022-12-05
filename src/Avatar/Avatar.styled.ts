// PR 보는 당신께
// 1. 뱃지, 아바타 두곳에서 사용하는 컬러 토큰인데 파일명부터 변수 명까지 맘에 드는게 하나도 없습니다.
// 2. 1:1 매칭이면 토큰이 맞을거같은데 그것도 아니고... typhography랑 구성이 비슷한데 파운데이션은 아닌거같고
// 3. theme안에 있는 css 를 쓰려고 css 중첩도 맘에 안들어요... 하나만쓰면 템플릿 리터럴이라 문자형 형식으로 나와요...
// 의견 오네가이

import styled, { css } from 'styled-components';
import { Box } from '../Layout';
import { AvatarProps } from './Avatar.types';
import { getAvatarInitialsFontSize, getColors } from './Avatar.utils';

export const avatarColors = {
  NEUTRAL: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.N200};
      color: ${theme.colors.N800};
    `}
  `,
  BLUE: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.B200};
      color: ${theme.colors.B500};
    `}
  `,
  GREEN: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.G200};
      color: ${theme.colors.G600};
    `}
  `,
  YELLOW: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.Y100};
      color: ${theme.colors.Y600};
    `}
  `,
  RED: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.R100};
      color: ${theme.colors.R600};
    `}
  `,
  VIOLET: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.V100};
      color: ${theme.colors.V600};
    `}
  `,
  TEAL: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.T100};
      color: ${theme.colors.T600};
    `}
  `,
  PINK: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.P100};
      color: ${theme.colors.P600};
    `}
  `,
  ORANGE: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.O100};
      color: ${theme.colors.O600};
    `}
  `,
} as const;

export const commonAvatarStyles = css<AvatarProps>`
  ${({ size = 32, shape = 'CIRCLE' }) => css`
    width: ${size}px;
    height: ${size}px;
    border-radius: ${shape === 'CIRCLE' ? '100%' : '4px'};
  `}
`;

// 버튼으로 바꿔야하나...
export const Avatar = styled(Box)<AvatarProps>`
  ${({ avatarColor }) => css`
    justify-content: center;
    align-items: center;
    overflow: hidden;
    ${getColors(avatarColor)}
    ${commonAvatarStyles}
  `}
`;

export const Text = styled.span<AvatarProps>`
  ${({ size = 32 }) => css`
    color: inherit;
    font-size: ${getAvatarInitialsFontSize(size)}px;
    line-height: 16px;
    font-weight: 400;
  `}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
