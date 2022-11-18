import { convertIcon, IconProps } from '../component/Icon';
function InterfaceIssueIcon({
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
        fill-rule="evenodd"
        d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm0-2A6 6 0 1 0 8 2a6 6 0 0 0 0 12Zm1-2H7v-2h2v2Zm0-3H7V4h2v5Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
const ActionAddIcon = convertIcon(Icon, '');
export default InterfaceIssueIcon;
