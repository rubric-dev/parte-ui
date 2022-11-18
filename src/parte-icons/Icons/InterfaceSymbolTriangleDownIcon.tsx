import { convertIcon, IconProps } from '../component/Icon';
function InterfaceSymbolTriangleDownIcon({
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
        d="M13 4.01c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 .16.05.31.11.44H3.1l4 8h.01c.16.33.49.56.89.56s.72-.23.89-.56h.01l4-8h-.01c.06-.14.11-.28.11-.44Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
const ActionAddIcon = convertIcon(Icon, '');
export default InterfaceSymbolTriangleDownIcon;
