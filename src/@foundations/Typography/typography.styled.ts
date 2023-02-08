import styled, { css } from 'styled-components';
import { COLORS } from '../Colors';
import {
  CommonProps,
  HeadingProps,
  ParagraphProps,
  CaptionProps,
  CodeProps,
} from './typography.types';

const CommonTextStyle = ({
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}: Pick<
  CommonProps,
  'marginBottom' | 'marginLeft' | 'marginRight' | 'marginTop'
>) => css`
  font-style: normal;
  margin-top: ${marginTop ? `${marginTop}px` : 'unset'};
  margin-bottom: ${marginBottom ? `${marginBottom}px` : 'unset'};
  margin-left: ${marginLeft ? `${marginLeft}px` : 'unset'};
  margin-right: ${marginRight ? `${marginRight}px` : 'unset'};
`;

export const Heading = styled.h2<Exclude<HeadingProps, 'children'>>`
  ${({ theme, size, color = 'N900', ...marginProps }) => css`
    ${CommonTextStyle(marginProps)}
    color: ${theme.colors[color]};
    ${size === 900 &&
    css`
      font-weight: 600;
      font-size: 32px;
      line-height: 40px;
    `}
    ${size === 800 &&
    css`
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
    `}
    ${size === 700 &&
    css`
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
    `}
    ${size === 600 &&
    css`
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
    `}
    ${size === 500 &&
    css`
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    `}
    ${size === 400 &&
    css`
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    `}
    ${size === 300 &&
    css`
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
    `}
    ${size === 200 &&
    css`
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
    `}
    ${size === 100 &&
    css`
      font-weight: 500;
      font-size: 10px;
      line-height: 16px;
    `}
  `}
`;

export const Paragraph = styled.p<Exclude<ParagraphProps, 'children'>>`
  ${({ theme, size, color = 'N900', ...marginProps }) => css`
    ${CommonTextStyle(marginProps)}
    color: ${theme.colors[color]};
    ${size === 300 &&
    css`
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    `}
    ${size === 200 &&
    css`
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    `}
    ${size === 100 &&
    css`
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
    `}
  `}
`;

export const Caption = styled.caption<Exclude<CaptionProps, 'children'>>`
  ${({ theme, size, color = 'N900', ...marginProps }) => css`
    ${CommonTextStyle(marginProps)}
    color: ${theme.colors[color]};
    ${size === 200 &&
    css`
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
    `}
    ${size === 100 &&
    css`
      font-weight: 500;
      font-size: 10px;
      line-height: 16px;
    `}
  `}
`;

export const Code = styled.code<Exclude<CodeProps, 'children'>>`
  ${({ theme, variant = 'default', ...marginProps }) => css`
    ${CommonTextStyle(marginProps)}
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    padding: 4px 8px;
    box-sizing: border-box;
    border-radius: 4px;
    ${variant === 'default' &&
    css`
      color: ${COLORS.N800};
      background-color: ${theme.colors.N50};
      border: 1px solid ${theme.colors.N400};
    `}
    ${variant === 'minimal' &&
    css`
      color: ${COLORS.B600};
      background-color: ${theme.colors.B50};
      border: 1px solid ${theme.colors.B200};
    `}
  `}
`;
