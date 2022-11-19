import { convertIcon, IconProps } from '../component/Icon';

function Icon({ size, ...rest }: Pick<IconProps, 'style' | 'color' | 'size'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fill-rule="evenodd"
        d="M10 12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1Zm3 0c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1Zm2 1H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1Zm-9-1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1Zm-3 0c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1v9c0 .55.45 1 1 1Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
const DataGroupedBarChartIcon = convertIcon(Icon, 'data-grouped-bar-chart');

export default DataGroupedBarChartIcon;
