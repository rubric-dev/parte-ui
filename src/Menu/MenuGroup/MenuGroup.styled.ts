import styled from 'styled-components';
import { Box } from '../../Layout';

export const Group = styled(Box)`
  box-sizing: border-box;
  padding: ${({ theme }) => `${theme.spacing.spacing8}px 0`};
`;
