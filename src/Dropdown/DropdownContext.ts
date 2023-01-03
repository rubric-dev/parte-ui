import { createContext } from 'react';
import { DropdownContextState } from './Dropdown.types';

const DropdownContext = createContext<DropdownContextState<unknown>>({});

export default DropdownContext;
