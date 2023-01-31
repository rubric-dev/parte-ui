export type ToastMinimumState = {
  customId?: number;
  status: Status;
  title: string;
  description?: string;
};

export type NotifyHandler = (toastProps: ToastMinimumState) => void;
export type RemoveHandler = (id: string | number) => void;
