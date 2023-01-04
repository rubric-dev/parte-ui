import { default as buttonColorToken } from './button';
import { default as typographyToken } from './typography';
import { default as formToken } from './form';
import { default as generalToken } from './general';
import { default as dropdownToken } from './dropdown';

export const tokens = {
  ...buttonColorToken,
  ...typographyToken,
  ...formToken,
  ...generalToken,
  ...dropdownToken,
};
export type TokenType = typeof tokens;
