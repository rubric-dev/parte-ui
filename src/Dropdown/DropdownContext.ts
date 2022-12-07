import { createContext } from 'react';
import { DropdownContextState } from './Dropdown.types';

// type GroupType<T> = {
//   groupName: any;
//   options: {
//     name: string;
//     value: string | number;
//     data: T;
//   }[];
// };

// type BasicType<T> = {
//   name: string;
//   value: string | number;
//   data: T;
// };

const DropdownContext = createContext<DropdownContextState<unknown>>({});

export default DropdownContext;
