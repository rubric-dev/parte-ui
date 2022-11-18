import { convertIcon, IconProps } from '../component/Icon';
function InterfaceStarIcon({
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
        d="m8 0 2.5 5.3 5.5.8-4 4.1.9 5.8L8 13.3 3.1 16l.9-5.8-4-4.1 5.5-.8L8 0Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
const ActionAddIcon = convertIcon(Icon, '');
export default InterfaceStarIcon;
