import { convertIcon, IconProps } from '../component/Icon';
function Icon({ size, ...rest }: Pick<IconProps, 'style' | 'color' | 'size'>) {
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
        d="m5.71 5.71 2-2C7.89 3.53 8 3.28 8 3c0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 0 0-1.42 1.42l.3.29H3C1.34 2 0 3.34 0 5v3c0 .55.45 1 1 1s1-.45 1-1V5c0-.55.45-1 1-1h1.59l-.3.29a1.003 1.003 0 0 0 1.42 1.42ZM12.5 11c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5ZM15 7H6c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1Zm-1 6.33L12 12l-1 1-2-3-2 2.67V9h7v4.33Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
const MediaImageRotateRightIcon = convertIcon(Icon, 'media-image-rotate-right');
export default MediaImageRotateRightIcon;
