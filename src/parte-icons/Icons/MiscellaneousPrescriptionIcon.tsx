import { convertIcon, IconProps } from '../component/Icon';
function MiscellaneousPrescriptionIcon({
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
        d="M10.91 8.34c.14-.21.36-.34.63-.34h1.29c.22 0 .41.07.52.26.09.16.08.33-.04.53l-2.49 2.87 2.77 3.54c.12.17.14.37.02.55-.11.17-.3.25-.5.25h-1.44a.69.69 0 0 1-.61-.35L9.4 13.51l-1.69 2.15c-.13.21-.36.34-.63.34H5.8c-.22 0-.41-.07-.52-.26-.09-.16-.08-.33.04-.53l2.71-3.48L4.3 6.99H3.03v3.47c0 .33-.26.56-.62.56h-.8c-.35-.01-.61-.23-.61-.56V.56c0-.33.26-.56.62-.56h3.11c.62 0 1.19.08 1.7.24.51.16.96.39 1.34.69a3.194 3.194 0 0 1 1.21 2.53c0 .81-.25 1.5-.74 2.08-.37.44-.84.77-1.42 1.01L7.88 7.9c.04.04.07.08.08.1l1.49 1.9 1.46-1.56ZM5.18 5c.62 0 1.08-.13 1.39-.37.29-.23.44-.71.44-1.16 0-.45-.15-.87-.44-1.1C6.26 2.12 5.8 2 5.18 2H2.99v3h2.19Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const ActionAddIcon = convertIcon(Icon, '');
export default MiscellaneousPrescriptionIcon;
