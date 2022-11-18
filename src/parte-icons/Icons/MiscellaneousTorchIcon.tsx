import { convertIcon, IconProps } from '../component/Icon';
function MiscellaneousTorchIcon({
  size,
  ...rest
}: Pick<IconProps, 'style' | 'color' | 'size'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M5 15c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H5v1Zm7-15H4c-.55 0-1 .45-1 1v1h10V1c0-.55-.45-1-1-1ZM5 7v6h6V7l2-4H3l2 4Zm2 0c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1V7Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const ActionAddIcon = convertIcon(Icon, '');
export default MiscellaneousTorchIcon;
