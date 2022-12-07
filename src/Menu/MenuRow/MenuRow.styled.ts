import styled, { css } from 'styled-components';
import { Box } from '../../Layout';
import { MenuRowType } from './MenuRow.types';

type ContainerProps = {
  type: MenuRowType;
  hover: boolean;
  selected?: boolean;
};

const sideBarStyle = css`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    border-radius: 0px 2px 2px 0px;
    background-color: ${({ theme }) => theme.colors.B400};
  }
`;

export const Container = styled(Box)<ContainerProps>`
  ${({ theme, hover, selected, type }) => {
    const isTitle = type === 'title';
    return css`
      box-sizing: border-box;
      height: ${isTitle ? '32px' : '40px'};
      min-width: 208px;
      width: fit-content;
      background: ${theme.colors.N0};
      display: flex;
      align-items: center;
      padding: ${`0 ${theme.spacing.spacing16}px`};
      ${isTitle ? theme.typography.C100 : theme.typography.P200}
      color: ${isTitle ? theme.colors.N700 : theme.colors.N800};
      cursor: ${isTitle ? 'default' : 'pointer'};
      position: relative;
      ${hover &&
      !isTitle &&
      css`
        background-color: ${theme.colors.N75};
      `}
      ${selected &&
      !isTitle &&
      css`
        ${sideBarStyle}
        background-color: ${theme.colors.B100};
        color: ${theme.colors.B400};
      `}
      ${!isTitle &&
      css`
        :active {
          ${sideBarStyle}
        }
      `}
    `;
  }}
`;

export const Icon = styled.div<{ selected?: boolean }>`
  ${({ theme, selected }) =>
    css`
      margin-right: 16px;
      display: inline-flex;
      align-items: center;
      svg {
        color: ${selected ? theme.colors.B400 : theme.colors.N600};
      }
    `}
`;
export const CheckboxContainer = styled.div`
  ${({ theme }) =>
    css`
      margin-right: ${`${theme.spacing.spacing12}px`};
    `}
`;
