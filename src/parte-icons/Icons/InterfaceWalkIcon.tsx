import { convertIcon, IconProps } from '../component/Icon';
function InterfaceWalkIcon({
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
        d="M13 8h-2c-.16 0-.31-.05-.44-.11v.01l-1.02-.51-.37 1.86 1.38.92-.01.02c.27.17.46.46.46.81v4c0 .55-.45 1-1 1s-1-.45-1-1v-3.46l-1.27-.85-1.8 4.67h-.01A.98.98 0 0 1 5 16c-.55 0-1-.45-1-1 0-.13.03-.25.07-.36h-.01L7.39 6H5.62l-.73 1.45h-.01C4.72 7.77 4.39 8 4 8c-.55 0-1-.45-1-1 0-.16.05-.31.11-.44H3.1l1-2h.01c.17-.33.5-.56.89-.56h3.16l.29-.75C8.17 2.9 8 2.47 8 2c0-1.1.9-2 2-2s2 .9 2 2c0 1-.73 1.82-1.69 1.97l-.5 1.32 1.43.71H13c.55 0 1 .45 1 1s-.45 1-1 1Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
const ActionAddIcon = convertIcon(Icon, '');
export default InterfaceWalkIcon;
