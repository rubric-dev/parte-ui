import React, { HTMLAttributes } from 'react';

export type SelectRowProps = {
  variant?: 'search' | 'title' | 'element';
  icon?: React.ReactNode;
  label?: string;
  tabIndex?: number;
  placeholder?: string;
};
