import { convertIcon, IconProps } from '../component/Icon';
function Icon({ size, ...rest }: Pick<IconProps, 'style' | 'color' | 'size'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M15 11.38A7.835 7.835 0 0 1 7.85 16C3.51 16 0 12.49 0 8.15 0 4.97 1.89 2.23 4.62 1c-.45.99-.7 2.08-.7 3.23a7.85 7.85 0 0 0 7.85 7.85c1.15 0 2.24-.25 3.23-.7Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousMoonIcon = convertIcon(Icon, 'miscellaneous-moon');
export default MiscellaneousMoonIcon;
