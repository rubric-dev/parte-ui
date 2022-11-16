function TimelineLineChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="#8F95B2"
        fillRule="evenodd"
        d="M15 12H2V9.41l3-3L8.29 9.7c.18.19.43.3.71.3.28 0 .53-.11.71-.29l6-6a1.003 1.003 0 0 0-1.42-1.42L9 7.59l-3.29-3.3A.997.997 0 0 0 5 4c-.28 0-.53.11-.71.29L2 6.59V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default TimelineLineChartIcon;
