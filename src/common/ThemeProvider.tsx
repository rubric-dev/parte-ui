import { ReactNode } from 'react';
import { ThemeProvider as DefaultThemeProvider } from 'styled-components';
import { Colors } from '../@foundations/Colors/colors.types';
import { ColorTokenType } from '../common/theme/colorToken';
import { cloneDeep } from 'lodash';
import defaultTheme from './theme/index';

type CustomTheme = Partial<ColorTokenType> & {
  colors?: Partial<Colors>;
};

type Props = {
  theme?: CustomTheme;
  children: ReactNode;
};

export default function ThemeProvider({ children, theme = {} }: Props) {
  const customizedTheme = overrideTheme(theme);

  return (
    <DefaultThemeProvider theme={customizedTheme}>
      {children}
    </DefaultThemeProvider>
  );
}

const overrideTheme = (theme: CustomTheme) => {
  let plate = cloneDeep(defaultTheme);

  const { colors: customColors = {}, ...customTokens } = theme;

  const {
    colors: defaultColors,
    commonStyles,
    elevation,
    spacing,
    typography,
    colorModalBackground,
    ...tokens
  } = plate;

  // colors를 먼저 변경해준다.
  if (customColors) {
    plate.colors = { ...defaultColors, ...customColors };
  }

  // token에 theme색상을 채워준다.
  for (const token in tokens) {
    const tokenKey = token as keyof typeof tokens;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    plate[tokenKey] = plate.colors[tokens[tokenKey]];
  }

  // theme에서 customTokens들의 색상만 override한다.
  if (customTokens) {
    plate = { ...plate, ...customTokens };
  }

  return plate;
};
