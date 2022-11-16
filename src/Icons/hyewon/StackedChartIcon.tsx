function StackedChartIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M10 2c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v3h3V2Zm3 10h1c.55 0 1-.45 1-1V8h-3v3c0 .55.45 1 1 1Zm2-7c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v2h3V5Zm-5 1H7v3h3V6ZM5 7c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v1h3V7Zm3 5h1c.55 0 1-.45 1-1v-1H7v1c0 .55.45 1 1 1Zm7 1H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1ZM3 12h1c.55 0 1-.45 1-1V9H2v2c0 .55.45 1 1 1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default StackedChartIcon;
