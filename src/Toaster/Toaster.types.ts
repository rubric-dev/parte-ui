export type ToastMinimumState = {
  customId?: number;
  status: Status;
  title: string;
  description?: string;
};

export type ToastHandlerType<T> = (passedProps: T) => void;
