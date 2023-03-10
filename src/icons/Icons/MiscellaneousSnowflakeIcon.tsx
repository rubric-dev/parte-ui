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
        d="m13.364 9 .879.879a1 1 0 1 1-1.415 1.414l-2.12-2.121a1.006 1.006 0 0 1-.14-.172H9v1.604a.97.97 0 0 1 .121.103l2.122 2.121a1 1 0 1 1-1.415 1.415L9 13.414V15a1 1 0 1 1-2 0v-1.636l-.879.879a1 1 0 1 1-1.414-1.415l2.121-2.12c.054-.054.111-.1.172-.139V9H5.38c-.038.06-.084.118-.137.172l-2.122 2.12A1 1 0 0 1 1.707 9.88L2.586 9H1a1 1 0 0 1 0-2h1.536l-.829-.828a1 1 0 1 1 1.414-1.415L5.243 6.88c.038.038.072.079.103.121H7V5.38a1.003 1.003 0 0 1-.172-.137L4.708 3.12A1 1 0 1 1 6.12 1.707l.88.879V1a1 1 0 0 1 2 0v1.536l.828-.829a1 1 0 1 1 1.415 1.414L9.12 5.243a1.006 1.006 0 0 1-.12.103V7h1.604a.997.997 0 0 1 .103-.121l2.121-2.122a1 1 0 1 1 1.415 1.415L13.414 7H15a1 1 0 1 1 0 2h-1.636Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousSnowflakeIcon = convertIcon(Icon, 'miscellaneous-snowflake');
export default MiscellaneousSnowflakeIcon;
