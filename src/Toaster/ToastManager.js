import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useRef, useState } from 'react';
import Toast from './Toast';
import * as Styled from './ToastManager.styled';
const ToastManager = memo(function ToastManager({ bindNotify, bindRemove, }) {
    const [toasts, setToasts] = useState([]);
    const idCounter = useRef(0);
    const removeToast = (id) => {
        const updatedToasts = toasts.filter((toast) => !String(toast.id).startsWith(String(id)));
        setToasts(updatedToasts);
        return updatedToasts;
    };
    const closeToast = (id) => {
        setToasts(toasts.map((toast) => {
            if (toast.id === id) {
                return Object.assign(Object.assign({}, toast), { isShown: false });
            }
            return toast;
        }));
    };
    const safeCloseToast = (id) => {
        const toastToRemove = toasts.find((toast) => String(toast.id) === String(id));
        if (toastToRemove) {
            closeToast(toastToRemove.id);
        }
    };
    const createToastInstance = (passedProps) => {
        const { title, description, status } = passedProps;
        const uniqueId = idCounter.current;
        idCounter.current += 1;
        const fixedId = uniqueId;
        return {
            id: fixedId,
            title,
            description: description !== null && description !== void 0 ? description : '',
            close: () => safeCloseToast(fixedId),
            status,
        };
    };
    const notify = (toastState) => {
        const tempToasts = toasts;
        const instance = createToastInstance(toastState);
        setToasts([instance, ...tempToasts]);
    };
    bindNotify(notify);
    bindRemove(safeCloseToast);
    return (_jsx(Styled.ToastContainer, { children: toasts.map((toast) => {
            return (_jsx(Toast, { toast: toast, onRemove: () => removeToast(toast.id) }, toast.id));
        }) }));
});
export default ToastManager;
