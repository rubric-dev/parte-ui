import { convertIcon, IconProps } from '../component/Icon';
function DataTimelineBarChartIcon({
  size,
  ...rest
}: Pick<IconProps, 'style' | 'color' | 'size'>) {
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
        d="M8 12h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1Zm5 0h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1Zm2 1H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1ZM3 12h1c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
const ActionAddIcon = convertIcon(Icon, '');
export default DataTimelineBarChartIcon;
