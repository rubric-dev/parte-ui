import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Styled from './Toggle.styled';
const Toggle = (props) => {
    const { label, disabled = false, on, onChange } = props;
    return (_jsxs(Styled.Container, Object.assign({ disabled: disabled }, { children: [_jsx(Styled.Input, { role: "switch", type: "checkbox", disabled: disabled, checked: on, onChange: () => onChange(!on) }), label && _jsx(Styled.Label, { children: label })] })));
};
export default Toggle;
