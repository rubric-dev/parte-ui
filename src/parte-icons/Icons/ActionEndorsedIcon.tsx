import { convertIcon, IconProps } from '../component/Icon';
function ActionEndorsedIcon({
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
        d="M15.86 8.5l-.81-1.42V5.5c0-.36-.19-.68-.49-.87l-1.37-.8-.81-1.41c-.19-.31-.51-.49-.86-.49H9.89L8.5 1.14a.948.948 0 00-1 0l-1.39.8H4.52a1 1 0 00-.86.49l-.8 1.37-1.44.83c-.3.19-.49.51-.49.87v1.65l-.8 1.37c-.08.15-.13.32-.13.49 0 .17.05.34.14.49l.8 1.37v1.65c0 .36.19.68.49.87l1.42.81.8 1.37c.19.31.51.49.86.49H6.1l1.39.8c.15.09.32.14.48.14.16 0 .34-.05.49-.14l1.39-.8h1.63a1 1 0 00.86-.49l.81-1.41 1.37-.8c.3-.19.49-.51.49-.87v-1.56l.81-1.42a.89.89 0 00.04-1.01zm-4.12-.82l-4.01 4.01c-.18.18-.43.29-.71.29-.28 0-.53-.11-.71-.29l-2-2c-.18-.19-.3-.44-.3-.71a1.003 1.003 0 011.71-.71l1.3 1.3 3.3-3.3a1.003 1.003 0 011.71.71.95.95 0 01-.29.7z"
        fill="currentcolor"
      />
    </svg>
  );
}

const ActionAddIcon = convertIcon(Icon, '');
export default ActionEndorsedIcon;
