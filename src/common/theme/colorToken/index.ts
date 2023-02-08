import { default as buttonColorToken } from './button';
import { default as typographyToken } from './typography';
import { default as formToken } from './form';
import { default as generalToken } from './general';
import { default as dropdownToken } from './dropdown';
import { default as overlayToken } from './overlay';

export const tokens = {
  ...buttonColorToken,
  ...typographyToken,
  ...formToken,
  ...generalToken,
  ...dropdownToken,
  ...overlayToken,
};
export type TokenType = typeof tokens;
