import { convertIcon, IconProps } from '../component/Icon';
function MiscellaneousBadgeIcon({
  size,
  ...rest
}: Pick<IconProps, 'style' | 'color' | 'size'>) {
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
        d="M13.36 4.59c-.15-1.13.5-2.01 1.1-2.87L13.43.53c-1.72.88-4.12.65-5.63-.53-1.51 1.18-3.91 1.41-5.63.52l-1.03 1.2c.61.86 1.25 1.74 1.1 2.87-.3 2.29-2.45 4.17-1.32 6.68.45 1.14 1.44 1.9 2.72 2.2 1.56.36 3.52.72 4.16 2.53.64-1.81 2.6-2.16 4.16-2.54 1.28-.3 2.27-1.06 2.72-2.2 1.12-2.5-1.03-4.38-1.32-6.67Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const ActionAddIcon = convertIcon(Icon, '');
export default MiscellaneousBadgeIcon;
