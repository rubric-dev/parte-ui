import { convertIcon, IconProps } from '../component/Icon';
function TableRemoveRowBottomIcon({
  size,
  ...rest
}: Pick<IconProps, 'style' | 'color' | 'size'>) {
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
        d="M15 0H1C0.45 0 0 0.45 0 1V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V1C16 0.45 15.55 0 15 0ZM14 14H2V6H14V14ZM14 5H2V2H14V5ZM6 11H10C10.55 11 11 10.55 11 10C11 9.45 10.55 9 10 9H6C5.45 9 5 9.45 5 10C5 10.55 5.45 11 6 11Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionAddIcon = convertIcon(Icon, '');
export default TableRemoveRowBottomIcon;
