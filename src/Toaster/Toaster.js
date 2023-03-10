import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../common/theme';
import ToastManager from './ToastManager';
const getMajorVersion = (version) => {
    const majorVersion = parseInt(version, 10);
    return majorVersion;
};
export default class Toaster {
    constructor() {
        Object.defineProperty(this, "notifyHandler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => { }
        });
        Object.defineProperty(this, "removeHandler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => { }
        });
        Object.defineProperty(this, "_bindNotify", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (handler) => {
                this.notifyHandler = handler;
            }
        });
        Object.defineProperty(this, "_bindRemove", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (handler) => {
                this.removeHandler = handler;
            }
        });
        Object.defineProperty(this, "notify", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (toastProps) => {
                return this.notifyHandler(toastProps);
            }
        });
        Object.defineProperty(this, "remove", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (id) => {
                return this.removeHandler(id);
            }
        });
        const canUseDom = Boolean(typeof window !== 'undefined' && window.document);
        if (!canUseDom)
            return;
        const container = document.createElement('div');
        container.setAttribute('toaster-container', '');
        document.body.appendChild(container);
        const toastManager = () => {
            return (_jsx(ThemeProvider, Object.assign({ theme: theme }, { children: _jsx(ToastManager, { bindNotify: this._bindNotify, bindRemove: this._bindRemove }) })));
        };
        if (getMajorVersion(ReactDOM.version) >= 18) {
            try {
                const { createRoot } = require('react-dom/client');
                const root = createRoot(container);
                root.render(toastManager());
            }
            catch (e) {
                ReactDOM.render(toastManager(), container);
            }
            return;
        }
        ReactDOM.render(toastManager(), container);
    }
}
