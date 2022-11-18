import { convertIcon, IconProps } from '../component/Icon';
function InterfaceBlockedPersonIcon({
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
        d="M9.39 12.69c-1.2-.53-1.04-.85-1.08-1.29-.01-.07-.01-.13-.02-.2.41-.37.75-.87.97-1.44 0 0 .01-.03.01-.04.05-.13.09-.26.13-.39.27-.06.43-.36.5-.63.01-.03.03-.08.05-.12C8.18 7.8 6.94 6.04 6.94 4c0-.32.04-.62.09-.92-.17-.03-.35-.08-.51-.08-.65 0-1.37.2-1.88.59-.5.38-.87.92-1.05 1.51-.04.14-.07.27-.09.41-.09.48-.14 1.23-.14 1.74v.06c-.19.08-.36.27-.4.68-.03.31.1.59.16.7.06.28.23.59.51.64a3.563 3.563 0 0 0 .14.41v.01c.22.59.57 1.1.99 1.46 0 .06-.01.12-.01.17-.04.44.08.76-1.12 1.29-1.2.53-3.01 1.1-3.38 1.95C-.12 15.5.03 16 .03 16h12.96s.15-.5-.22-1.36c-.37-.85-2.18-1.42-3.38-1.95ZM11.97 0C9.75 0 7.94 1.79 7.94 4s1.8 4 4.03 4C14.2 8 16 6.21 16 4s-1.8-4-4.03-4ZM9.96 4c0-1.1.9-2 2.01-2 .37 0 .72.11 1.02.28l-2.75 2.73c-.17-.3-.28-.64-.28-1.01Zm2.01 2c-.37 0-.72-.11-1.02-.28l2.75-2.73c.18.3.28.64.28 1.01.01 1.1-.9 2-2.01 2Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
const ActionAddIcon = convertIcon(Icon, '');
export default InterfaceBlockedPersonIcon;
