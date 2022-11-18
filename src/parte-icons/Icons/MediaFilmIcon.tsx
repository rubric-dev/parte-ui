import { convertIcon, IconProps } from '../component/Icon';
function MediaFilmIcon({
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
        d="M15 1h-5v2H6V1H1c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h5v-2h4v2h5c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1ZM4 13H2v-2h2v2Zm0-3H2V8h2v2Zm0-3H2V5h2v2Zm0-3H2V2h2v2Zm6 6H6V5h4v5Zm4 3h-2v-2h2v2Zm0-3h-2V8h2v2Zm0-3h-2V5h2v2Zm0-3h-2V2h2v2Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
const ActionAddIcon = convertIcon(Icon, '');
export default MediaFilmIcon;
