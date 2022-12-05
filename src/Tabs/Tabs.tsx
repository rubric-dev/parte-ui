import { TabsContainer } from './Tabs.styled';
import { TabsProps } from './Tabs.types';

const Tabs = (props: TabsProps) => {
  return <TabsContainer {...props}>{props.children}</TabsContainer>;
};

export default Tabs;
