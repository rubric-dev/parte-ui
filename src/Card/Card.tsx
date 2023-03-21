import * as Styled from './Card.styled';
import { CardProps } from './Card.types';

const Card = ({ type = 'default', children, ...props }: CardProps) => {
  const CardComponent =
    type === 'default' ? Styled.DefaultCard : Styled.SelectableCard;

  return <CardComponent {...props}>{children}</CardComponent>;
};

export default Card;
