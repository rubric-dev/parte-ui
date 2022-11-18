import { convertIcon, IconProps } from '../component/Icon';
function InterfaceResizeTextareaIcon({
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
        d="M15.168 4.439 5.835 15.106a.667.667 0 0 1-1.003-.878L14.165 3.56a.667.667 0 1 1 1.003.878Zm.01 6.654-3.333 4a.667.667 0 1 1-1.024-.853l3.334-4a.667.667 0 1 1 1.024.853Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
const ActionAddIcon = convertIcon(Icon, '');
export default InterfaceResizeTextareaIcon;
