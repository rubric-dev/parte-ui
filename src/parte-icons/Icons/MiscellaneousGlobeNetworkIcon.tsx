import { convertIcon, IconProps } from '../component/Icon';
function Icon({ size, ...rest }: Pick<IconProps, 'style' | 'color' | 'size'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Zm5.17 5h-2.44c-.21-1.11-.51-2.03-.91-2.69 1.43.46 2.61 1.43 3.35 2.69ZM10 8c0 .73-.05 1.39-.12 2H6.12C6.05 9.39 6 8.73 6 8s.05-1.39.12-2h3.76c.07.61.12 1.27.12 2ZM8 2c.67 0 1.36 1.1 1.73 3H6.27C6.64 3.1 7.33 2 8 2Zm-1.82.31c-.4.66-.71 1.58-.91 2.69H2.83a6.025 6.025 0 0 1 3.35-2.69ZM2 8c0-.7.13-1.37.35-2h2.76C5.04 6.62 5 7.28 5 8s.04 1.38.11 2H2.35C2.13 9.37 2 8.7 2 8Zm.83 3h2.44c.21 1.11.51 2.03.91 2.69A6.025 6.025 0 0 1 2.83 11ZM8 14c-.67 0-1.36-1.1-1.73-3h3.46c-.37 1.9-1.06 3-1.73 3Zm1.82-.31c.4-.66.7-1.58.91-2.69h2.44a6.025 6.025 0 0 1-3.35 2.69ZM13.65 10h-2.76c.07-.62.11-1.28.11-2s-.04-1.38-.11-2h2.76c.22.63.35 1.3.35 2s-.13 1.37-.35 2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousGlobeNetworkIcon = convertIcon(
  Icon,
  'miscellaneous-globe-network'
);
export default MiscellaneousGlobeNetworkIcon;
