import React, { CSSProperties, DetailedHTMLProps } from 'react';
import { COLORS } from '../../@foundations/Colors';

export const IconColor: Record<
  Status | 'default' | 'muted' | 'disabled' | 'selected',
  string
> = {
  default: COLORS.N700,
  muted: COLORS.N600,
  disabled: COLORS.N400,
  selected: COLORS.B500,
  info: COLORS.B400,
  success: COLORS.G400,
  warning: COLORS.Y400,
  error: COLORS.R400,
} as const;

type IconColorType = keyof typeof IconColor;
export interface IconProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  svg: React.ReactElement;
  rotate?: number;
  size?: number;
  color?: IconColorType;
  type?: string;
}

const Icon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    svg,
    rotate,
    style,
    type,
    color = 'default',
    size = '16',
    ...restProps
  } = props;

  /**
   * span 에 기본 lineHeight 가 있으므로 오버라이드 해야함.
   * */
  const overrideStyle: Pick<IconProps, 'style'> = {
    style: { ...style },
  };

  const svgComponent = React.cloneElement(svg, {
    color: IconColor[color],
    size,
    style: overrideStyle.style,
  });

  const outerStyle: CSSProperties = { lineHeight: 0 };
  if (Number.isSafeInteger(rotate))
    outerStyle.transform = `rotate(${rotate}deg)`;
  Object.assign(outerStyle, style);

  return (
    <span
      role="img"
      ref={ref}
      aria-label={type}
      style={outerStyle}
      {...restProps}
    >
      {svgComponent}
    </span>
  );
});

// @ts-ignore
// Icon.elementType = 'Icon';

type SvgFn = (
  props: Pick<IconProps, 'style' | 'color' | 'size'>
) => JSX.Element;

const convertIcon = (Svg: SvgFn, iconType: string) => {
  /**
   * 일단 size default 로 아이콘 컴포넌트를 만든 다음, cloneElement 로 props 를 바꾼다.
   * */
  const InnerIcon = React.forwardRef<
    HTMLSpanElement,
    Omit<IconProps, 'svg' | 'type'>
  >((props, ref) => (
    <Icon svg={<Svg />} type={iconType} ref={ref as any} {...props} />
  ));
  // @ts-ignore
  // InnerIcon.elementType = 'Icon';
  return InnerIcon;
};

export { convertIcon };
export default Icon;
