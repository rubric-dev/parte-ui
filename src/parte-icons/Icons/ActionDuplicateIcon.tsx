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
        d="M15 0H5C4.45 0 4 0.45 4 1V3H6V2H14V9H13V11H15C15.55 11 16 10.55 16 10V1C16 0.45 15.55 0 15 0ZM11 4H1C0.45 4 0 4.45 0 5V15C0 15.55 0.45 16 1 16H11C11.55 16 12 15.55 12 15V5C12 4.45 11.55 4 11 4ZM10 14H2V6H10V14Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionDuplicateIcon = convertIcon(Icon, 'action-duplicate');
export default ActionDuplicateIcon;
