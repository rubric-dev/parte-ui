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
        fillRule="evenodd"
        d="M15 10H4.41L5.7 8.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L2 9.59V8c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1v-1.59l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L4.41 12H15c.55 0 1-.45 1-1s-.45-1-1-1Zm0-9c-.55 0-1 .45-1 1v1.59L11.71 1.3A.965.965 0 0 0 11 1a1.003 1.003 0 0 0-.71 1.71L11.59 4H1c-.55 0-1 .45-1 1s.45 1 1 1h10.59L10.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L14 6.41V8c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MediaKeyTabIcon = convertIcon(Icon, 'media-key-tab');
export default MediaKeyTabIcon;
