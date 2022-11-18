import { convertIcon, IconProps } from '../component/Icon';
function InterfaceCaretLeftIcon({
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
        d="M9.5 4c-.13 0-.24.05-.33.13l-4 3.5c-.1.09-.17.22-.17.37s.07.28.17.37l4 3.5a.495.495 0 0 0 .83-.37v-7c0-.28-.22-.5-.5-.5Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
const ActionAddIcon = convertIcon(Icon, '');
export default InterfaceCaretLeftIcon;
