import { convertIcon, IconProps } from '../component/Icon';
function MiscellaneousFullCircleIcon({
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
      <circle cx="8" cy="8" r="8" fill="currentcolor" />
    </svg>
  );
}
const ActionAddIcon = convertIcon(Icon, '');
export default MiscellaneousFullCircleIcon;
