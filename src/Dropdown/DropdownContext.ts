import { createContext } from 'react';
import { DropdownProps } from './Dropdown.types';
type DropdownContextType = Partial<Omit<DropdownProps<any>, 'children'>>;
const DropdownContext = createContext<DropdownContextType>({});
export default DropdownContext;
