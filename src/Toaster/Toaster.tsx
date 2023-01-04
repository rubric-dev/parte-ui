import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../common/theme';
import { ToastMinimumState, ToastHandlerType } from './Toaster.types';
import ToastManager from './ToastManager';

/**
 * The Toaster manages the interactions between
 * the ToasterManger and the toast API.
 */

interface IToaster {
  notifyHandler: ToastHandlerType<ToastMinimumState>;
  removeHandler: (id: string | number) => void;
}

const getMajorVersion = (version: string) => {
  const majorVersion = parseInt(version, 10);
  return majorVersion;
};

export default class Toaster implements IToaster {
  notifyHandler = (passedProps: ToastMinimumState) => {};
  removeHandler = (id: string | number) => {};

  constructor() {
    const canUseDom = Boolean(typeof window !== 'undefined' && window.document);
    if (!canUseDom) return;

    const container = document.createElement('div');
    container.setAttribute('toaster-container', '');
    document.body.appendChild(container);

    const toastManager = () => {
      return (
        <ThemeProvider theme={theme}>
          <ToastManager
            bindNotify={this._bindNotify}
            bindRemove={this._bindRemove}
          />
        </ThemeProvider>
      );
    };

    if (getMajorVersion(ReactDOM.version) >= 18) {
      try {
        const { createRoot } = require('react-dom/client');
        const root = createRoot(container);

        root.render(toastManager());
      } catch (e) {
        ReactDOM.render(toastManager(), container);
      }
      return;
    }

    ReactDOM.render(toastManager(), container);
  }

  _bindNotify = (handler: ToastHandlerType<ToastMinimumState>) => {
    this.notifyHandler = handler;
  };

  _bindRemove = (handler: ToastHandlerType<string | number>) => {
    this.removeHandler = handler;
  };

  notify = (passedProps: ToastMinimumState) => {
    return this.notifyHandler(passedProps);
  };

  remove = (id: string | number) => {
    return this.removeHandler(id);
  };
}
