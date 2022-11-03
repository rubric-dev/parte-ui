import styled from 'styled-components';
import { commonCardStyles } from './Card.styled';
import { CardProps } from './Card.types';

const StyledCard = styled.div<CardProps>`
  ${commonCardStyles}
`;

const Card = ({ size, children }: CardProps) => {
  return <StyledCard size={size}>{children}</StyledCard>;
};

export default Card;
