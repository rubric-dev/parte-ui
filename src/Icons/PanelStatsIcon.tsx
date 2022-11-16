function PanelStatsIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M1 1h14c.6 0 1 .4 1 1v11c0 .6-.4 1-1 1H1c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1Zm1 11h6V3H2v9Zm12 0H9V3h5v9Zm-4-8h3v1h-3V4Zm0 2h3v1h-3V6Zm3 2h-3v1h3V8Zm-3 2h3v1h-3v-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default PanelStatsIcon;
