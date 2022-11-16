function InterfaceControlIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="#8F95B2"
        fill-rule="evenodd"
        d="M13 8H8v5h5V8Zm0-5H8v4h5V3Zm2-3H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1Zm-1 14H2V2h12v12ZM7 3H3v10h4V3Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
export default InterfaceControlIcon;