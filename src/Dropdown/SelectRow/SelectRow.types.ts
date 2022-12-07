import React from 'react';

export type SelectRowProps = {
  variant?: 'search' | 'title' | 'element';
  status?: 'enable' | 'hover' | 'focused' | 'selected';
  icon?: React.ReactNode;
  label?: string;
};
