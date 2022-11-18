import { convertIcon, IconProps } from '../component/Icon';
function Icon({ size, ...rest }: Pick<IconProps, 'style' | 'color' | 'size'>) {
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
        d="m16 1.99-16 6 16 6-4-6 4-6Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
const InterfaceDirectionLeftIcon = convertIcon(
  Icon,
  'interface-direction-left'
);
export default InterfaceDirectionLeftIcon;
