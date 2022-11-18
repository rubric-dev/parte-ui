import { convertIcon, IconProps } from '../component/Icon';
function FileFolderNewIcon({
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
        fillRule="evenodd"
        d="M10.165 7a3.003 3.003 0 0 0 2.827 2 3.003 3.003 0 0 0 2.827-2H16v7c0 .55-.45 1-1 1H1.01c-.55 0-1-.45-1-1V7h10.155ZM8.76 6H0V3c0-.55.45-1 1-1h1.998c.28 0 .53.11.71.29L5.417 4h2.578c0 .768.29 1.469.765 2Zm6.23-3c.55 0 1 .45 1 1s-.45 1-1 1h-.999v1c0 .55-.45 1-1 1-.549 0-.998-.45-.998-1V5h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V2c0-.55.45-1 .999-1 .55 0 1 .45 1 1v1h.999Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const ActionAddIcon = convertIcon(Icon, '');
export default FileFolderNewIcon;
