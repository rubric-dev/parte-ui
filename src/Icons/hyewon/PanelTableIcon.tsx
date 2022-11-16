function PanelTableIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15 1H1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1ZM8 9H6V7h2v2Zm0-3H6V4h2v2Zm-6 6V3h3v9H2Zm4 0v-2h2v2H6Zm8 0H9v-2h5v2Zm0-3H9V7h5v2Zm0-3H9V4h5v2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default PanelTableIcon;
