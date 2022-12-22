import styled, { css } from 'styled-components';
import { Box } from '../../Layout';
import { MenuRowType } from './MenuRow.types';

type ContainerProps = {
  type: MenuRowType;
  hover: boolean;
  selected?: boolean;
  disabled?: boolean;
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
  ${({ theme, hover, selected, type, disabled }) => {
    const isTitle = type === 'title';
    return css`
      box-sizing: border-box;
      height: ${isTitle ? '32px' : '40px'};
      min-width: 208px;
      width: fit-content;
      background-color: ${theme.colorBackgroundDropdown};
      display: flex;
      align-items: center;
      padding: ${`0 ${theme.spacing.spacing16}px`};
      ${isTitle ? theme.typography.C100 : theme.typography.P200}
      color: ${isTitle ? theme.colors.N700 : theme.colors.N800};
      cursor: ${isTitle || disabled ? 'default' : 'pointer'};
      position: relative;
      ${hover &&
      !isTitle &&
      css`
        background-color: ${theme.colorBackgroundDropdownHover};
      `}
      ${selected &&
      !isTitle &&
      css`
        ${sideBarStyle}
        background-color: ${theme.colorBackgroundDropdownSelected};
        color: ${theme.colors.B400};
      `}
      ${disabled &&
      !isTitle &&
      css`
        color: ${theme.colors.N700};
        background-color: ${theme.colorBackgroundDropdown};
      `}
      ${type === 'checkbox' &&
      css`
        color: ${theme.colors.N800};
      `}
    `;
  }}
`;

export const Icon = styled.div<{ selected?: boolean; disabled?: boolean }>`
  ${({ theme, selected, disabled }) =>
    css`
      margin-right: 16px;
      display: inline-flex;
      align-items: center;
      svg {
        color: ${theme.colors.N700};
        ${selected &&
        css`
          color: ${theme.colors.B400};
        `}
        ${disabled &&
        css`
          color: ${theme.colors.N600};
        `}
      }
    `}
`;
export const CheckboxContainer = styled.div`
  ${({ theme }) =>
    css`
      margin-right: ${`${theme.spacing.spacing12}px`};
    `}
`;
