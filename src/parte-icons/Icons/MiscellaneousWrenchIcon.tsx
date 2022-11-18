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
        d="m15.83 3.7-3.06 3.05-2.84-.7-.7-2.83L12.29.17a5.004 5.004 0 0 0-4.83 1.29 4.967 4.967 0 0 0-1.12 5.36L.58 12.58c-.36.36-.58.86-.58 1.41 0 1.1.9 2 2 2 .55 0 1.05-.22 1.41-.59l5.77-5.77c1.79.69 3.91.33 5.35-1.12 1.32-1.3 1.74-3.15 1.3-4.81Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousWrenchIcon = convertIcon(Icon, 'miscellaneous-wrench');
export default MiscellaneousWrenchIcon;
