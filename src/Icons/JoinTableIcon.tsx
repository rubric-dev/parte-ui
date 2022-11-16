function JoinTableIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15 5h-3V2c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h3v3c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1Zm-5-1v2H6V4h4Zm0 6H6V7h4v3ZM2 4h3v2H2V4Zm0 5V7h3v2H2Zm4 4v-2h4v2H6Zm8 0h-3v-2h3v2Zm0-3h-3V8h3v2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default JoinTableIcon;
