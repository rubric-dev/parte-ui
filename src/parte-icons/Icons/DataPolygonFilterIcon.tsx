import { convertIcon, IconProps } from '../component/Icon';

function Icon({ size, ...rest }: Pick<IconProps, 'style' | 'color' | 'size'>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 5C13.76 5 13.53 5.05 13.32 5.13L9.97 2.34C9.98 2.23 10 2.12 10 2C10 0.9 9.1 0 8 0C6.9 0 6 0.9 6 2C6 2.04 6.01 2.08 6.01 2.12L2.88 4.21C2.61 4.08 2.32 4 2 4C0.9 4 0 4.9 0 6C0 6.74 0.4 7.38 1 7.72V12.27C0.4 12.62 0 13.26 0 14C0 15.1 0.9 16 2 16C2.74 16 3.38 15.6 3.72 15H8.27C8.62 15.6 9.25 16 9.99 16C11.09 16 11.99 15.1 11.99 14C11.99 13.63 11.88 13.3 11.71 13L14 9C15.11 8.99 16 8.1 16 7C16 5.9 15.1 5 14 5ZM9.99 12C9.26 12 8.62 12.41 8.28 13H3.73C3.55 12.7 3.3 12.45 3 12.28V7.72C3.6 7.38 4 6.74 4 6C4 5.96 3.99 5.92 3.99 5.88L7.12 3.79C7.39 3.92 7.68 4 8 4C8.24 4 8.47 3.95 8.68 3.87L12.03 6.66C12.02 6.77 12 6.88 12 7C12 7.37 12.11 7.7 12.28 8L9.99 12Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const DataPolygonFilterIcon = convertIcon(Icon, 'data-polygon-filter');
export default DataPolygonFilterIcon;
