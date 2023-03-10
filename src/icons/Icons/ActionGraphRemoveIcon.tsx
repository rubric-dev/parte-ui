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
        d="M12.89 8.11L12.88 8.12L12.5 7.74L12.12 8.12L12.1 8.1C11.56 8.65 10.83 9 10 9C8.34 9 7 7.66 7 6C7 5.17 7.35 4.44 7.9 3.9L7.88 3.88L8.26 3.5L7.88 3.12L7.89 3.11C7.35 2.57 7 1.83 7 1C7 0.66 7.07 0.35 7.17 0.04C3.14 0.46 0 3.86 0 8C0 12.42 3.58 16 8 16C12.14 16 15.54 12.86 15.96 8.83C15.65 8.93 15.34 9 15 9C14.17 9 13.43 8.65 12.89 8.11ZM13.91 3.5L15.7 1.71C15.89 1.53 16 1.28 16 1C16 0.45 15.55 0 15 0C14.72 0 14.47 0.11 14.29 0.29L12.5 2.09L10.71 0.3C10.53 0.11 10.28 0 10 0C9.45 0 9 0.45 9 1C9 1.28 9.11 1.53 9.29 1.71L11.08 3.5L9.29 5.29C9.11 5.47 9 5.72 9 6C9 6.55 9.45 7 10 7C10.28 7 10.53 6.89 10.71 6.71L12.5 4.92L14.29 6.71C14.47 6.89 14.72 7 15 7C15.55 7 16 6.55 16 6C16 5.72 15.89 5.47 15.71 5.29L13.91 3.5Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionGraphRemoveIcon = convertIcon(Icon, 'action-graph-remove');
export default ActionGraphRemoveIcon;
