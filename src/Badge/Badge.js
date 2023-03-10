import { jsx as _jsx } from "react/jsx-runtime";
import * as Styled from './Badge.styled';
const Badge = ({ type, badgeColor, text }) => {
    return (_jsx(Styled.Badge, Object.assign({ badgeColor: badgeColor, type: type }, { children: _jsx(Styled.Text, { children: text }) })));
};
export default Badge;
