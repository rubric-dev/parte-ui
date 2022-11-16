function ChartIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M0 15c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V9.4L0 11v4Zm6-5.5V15c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-5l-1 1-3-1.5ZM13 7l-1 1v7c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V7.88c-.26.07-.58.12-1 .12-1.96 0-2-1-2-1Zm2-6h-3c-.55 0-1 .45-1 1s.45 1 1 1h.59L8.8 6.78 5.45 5.11v.01C5.31 5.05 5.16 5 5 5c-.16 0-.31.05-.44.11V5.1l-4 2v.01C.23 7.28 0 7.61 0 8c0 .55.45 1 1 1 .16 0 .31-.05.44-.11v.01L5 7.12 8.55 8.9v-.01c.14.06.29.11.45.11.28 0 .53-.11.71-.29L14 4.41V5c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default ChartIcon;
