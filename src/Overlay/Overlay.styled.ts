import styled, { css } from 'styled-components';

export const BackDrop = styled.div`
  ${() => css`
    background: rgba(67, 90, 111, 0.7);
    box-sizing: border-box;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 100;
  `}
`;
