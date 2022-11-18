import { convertIcon, IconProps } from '../component/Icon';
function DataFlowsIcon({
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
        d="M13.5 6a2.5 2.5 0 0 0-2.45 2h-1.3L5.74 4l-.75.75L8.25 8h-3.3a2.5 2.5 0 1 0 0 1h3.3l-3.26 3.25.75.75 4.01-4h1.3a2.5 2.5 0 1 0 2.45-3Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
const ActionAddIcon = convertIcon(Icon, '');
export default DataFlowsIcon;
