import { convertIcon, IconProps } from '../component/Icon';
function InterfaceErrorIcon({
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
        d="M8.461.932c-4.16 0-7.53 3.37-7.53 7.53s3.37 7.529 7.53 7.529 7.53-3.37 7.53-7.53S12.62.931 8.46.931Zm.941 12.235H7.52v-1.882h1.882v1.882Zm0-2.823H7.52V3.755h1.882v6.589Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
const ActionAddIcon = convertIcon(Icon, '');
export default InterfaceErrorIcon;
