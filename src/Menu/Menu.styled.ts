import styled from 'styled-components';

export const Menu = styled.nav`
  box-sizing: border-box;
  width: fit-content;
  ${({ theme }) => theme.elevation.elevation2}
`;
