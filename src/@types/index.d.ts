import React from 'react';

export {};

declare global {
  type Option<T> = {
    label: string;
    value: T;
  };
}
