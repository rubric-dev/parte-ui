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
        fillRule="evenodd"
        d="m7.41 8 3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-4 4C5.11 7.47 5 7.72 5 8c0 .28.11.53.29.71l4 4a1.003 1.003 0 0 0 1.42-1.42L7.41 8Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceChevronLeftIcon = convertIcon(Icon, 'interface-chevron-left');
export default InterfaceChevronLeftIcon;
