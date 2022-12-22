import { MenuRow } from '../MenuRow';
import * as Styled from './MenuGroup.styled';
import { MenuGroupProps } from './MenuGroup.types';

export default function MenuGroup({ title, children }: MenuGroupProps) {
  return (
    <Styled.Group direction="column">
      {title && <MenuRow type="title">{title}</MenuRow>}
      {children}
    </Styled.Group>
  );
}
