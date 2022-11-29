export {};

declare global {
  type Option<T> = {
    label: string;
    value: T;
  };
}
