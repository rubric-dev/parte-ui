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
        d="M8 7H11C11.55 7 12 6.55 12 6C12 5.45 11.55 5 11 5H8C7.45 5 7 5.45 7 6C7 6.55 7.45 7 8 7ZM8 3H9C9.55 3 10 2.55 10 2C10 1.45 9.55 1 9 1H8C7.45 1 7 1.45 7 2C7 2.55 7.45 3 8 3ZM8 11H13C13.55 11 14 10.55 14 10C14 9.45 13.55 9 13 9H8C7.45 9 7 9.45 7 10C7 10.55 7.45 11 8 11ZM5 12C4.72 12 4.47 12.11 4.29 12.29L4 12.59V9C4 8.45 3.55 8 3 8C2.45 8 2 8.45 2 9V12.59L1.71 12.3C1.53 12.11 1.28 12 1 12C0.45 12 0 12.45 0 13C0 13.28 0.11 13.53 0.29 13.71L2.29 15.71C2.47 15.89 2.72 16 3 16C3.28 16 3.53 15.89 3.71 15.71L5.71 13.71C5.89 13.53 6 13.28 6 13C6 12.45 5.55 12 5 12ZM15 13H8C7.45 13 7 13.45 7 14C7 14.55 7.45 15 8 15H15C15.55 15 16 14.55 16 14C16 13.45 15.55 13 15 13Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionSortAscIcon = convertIcon(Icon, 'action-sort-asc');
export default ActionSortAscIcon;
