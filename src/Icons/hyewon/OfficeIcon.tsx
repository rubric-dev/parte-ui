function OfficeIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15 5h-3V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h3v-4h4v4h7c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1ZM5 10H2V7h3v3Zm0-5H2V2h3v3Zm5 5H7V7h3v3Zm0-5H7V2h3v3Zm4 9h-2v-2h2v2Zm0-4h-2V7h2v3Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default OfficeIcon;
