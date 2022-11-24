import { default as buttonColorToken } from './button';
import { default as typographyToken } from './typography';
import { default as formToken } from './form';
import { default as generalToken } from './general';

export const tokens = {
  ...buttonColorToken,
  ...typographyToken,
  ...formToken,
  ...generalToken,
};
export type TokenType = typeof tokens;
