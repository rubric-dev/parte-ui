import { convertIcon, IconProps } from '../component/Icon';
function DataTimelineLineChartIcon({
  size,
  ...rest
}: Pick<IconProps, 'style' | 'color' | 'size'>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 12H2V9.41L5 6.41L8.29 9.7C8.47 9.89 8.72 10 9 10C9.28 10 9.53 9.89 9.71 9.71L15.71 3.71C15.89 3.53 16 3.28 16 3C16 2.45 15.55 2 15 2C14.72 2 14.47 2.11 14.29 2.29L9 7.59L5.71 4.29C5.53 4.11 5.28 4 5 4C4.72 4 4.47 4.11 4.29 4.29L2 6.59V3C2 2.45 1.55 2 1 2C0.45 2 0 2.45 0 3V13C0 13.55 0.45 14 1 14H15C15.55 14 16 13.55 16 13C16 12.45 15.55 12 15 12Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionAddIcon = convertIcon(Icon, '');
export default DataTimelineLineChartIcon;
