import React, { CSSProperties, DetailedHTMLProps } from 'react';

export interface IconProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  svg: React.ReactElement;
  spin?: boolean;
  rotate?: number;
  size?: number;
  type?: string;
}

const Icon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const { svg, rotate, style, type, color, size = '16', ...restProps } = props;

  /**
   * span 에 기본 lineHeight 가 있으므로 오버라이드 해야함.
   * */
  const overrideStyle: Pick<IconProps, 'style'> = {
    style: { lineHeight: 0, ...style },
  };

  const svgComponent = React.cloneElement(svg, {
    color,
    size,
    style: overrideStyle.style,
  });

  const outerStyle: CSSProperties = {};
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

type SvgFn = (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
const convertIcon = (Svg: SvgFn, iconType: string) => {
  /**
   * 일단 size default 로 아이콘 컴포넌트를 만든 다음, cloneElement 로 props 를 바꾼다.
   * */
  const PreEvaluatedSvgComponent = Svg as SvgFn;
  const InnerIcon = React.forwardRef<
    HTMLSpanElement,
    Omit<IconProps, 'svg' | 'type' | 'size'>
  >((props, ref) => (
    <Icon
      svg={<PreEvaluatedSvgComponent />}
      type={iconType}
      ref={ref as any}
      {...props}
    />
  ));
  // @ts-ignore
  // InnerIcon.elementType = 'Icon';
  return InnerIcon;
};

export { convertIcon };
export default Icon;
