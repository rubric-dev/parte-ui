type AlertType = 'alert' | 'toast' | 'alert-inline';

export type AlertProps =
  | AlertBasicProps
  | AlertToastProps
  | AlertAlertInlineProps;

type AlertBasicProps = {
  status: Status;
  type: 'alert';
  title?: string;
  description?: string;
};
export type AlertToastProps = {
  toastId: string | number;
  status: Status;
  type: 'toast';
  title?: string;
  description?: string;
  onClose: () => void;
};
type AlertAlertInlineProps = {
  status: Status;
  type: 'alert-inline';
  message?: string;
};
