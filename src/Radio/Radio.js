import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Styled from './Radio.styled';
import { useContext } from 'react';
import RadioGroupContext from '../RadioGroup/RadioGroupContext';
const Radio = ({ value, label, disabled = false }) => {
    const { value: selectedValue, name, disabled: groupDisabled, onChange, } = useContext(RadioGroupContext);
    return (_jsxs(Styled.RadioWrapper, Object.assign({ disabled: groupDisabled || disabled }, { children: [_jsx(Styled.Input, { type: "radio", value: value, name: name, checked: selectedValue ? selectedValue === value : undefined, disabled: groupDisabled || disabled, onChange: (e) => {
                    onChange === null || onChange === void 0 ? void 0 : onChange(e);
                } }), _jsx(Styled.Label, { children: label })] })));
};
export default Radio;
