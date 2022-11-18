import { convertIcon, IconProps } from '../component/Icon';
function MediaKeyControlIcon({
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
        d="m12.71 5.29-4-4A.997.997 0 0 0 8 1c-.28 0-.53.11-.71.29l-4 4a1.003 1.003 0 0 0 1.42 1.42L8 3.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
const ActionAddIcon = convertIcon(Icon, '');
export default MediaKeyControlIcon;
