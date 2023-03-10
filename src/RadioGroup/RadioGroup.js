import { jsx as _jsx } from "react/jsx-runtime";
import RadioGroupContext from './RadioGroupContext';
const RadioGroup = ({ value, name, disabled = false, children, onChange, }) => {
    return (_jsx(RadioGroupContext.Provider, Object.assign({ value: { value, name, disabled, onChange } }, { children: children })));
};
export default RadioGroup;
