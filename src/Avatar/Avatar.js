import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useState } from 'react';
import { getInitial } from '../common/utils/badge.utils';
import * as Styled from './Avatar.styled';
const Avatar = ({ avatarColor = 'AUTO', size = 32, shape = 'CIRCLE', name, showInitial, src, }) => {
    const [imageHasFailedLoading, setImageHasFailedLoading] = useState(false);
    const onError = useCallback(() => setImageHasFailedLoading(true), []);
    const imageUnavailable = !src || imageHasFailedLoading;
    return (_jsx(Styled.Avatar, Object.assign({ avatarColor: avatarColor, size: size, shape: shape }, { children: imageUnavailable || showInitial ? (_jsx(Styled.Text, Object.assign({ size: size }, { children: getInitial(name !== null && name !== void 0 ? name : '') }))) : (_jsx(Styled.Image, { src: src, onError: onError })) })));
};
export default Avatar;
