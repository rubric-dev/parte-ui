function InterfacePropertyIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-.5-6.5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5ZM7 3h8c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1Zm8 10H7c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1ZM3 0C1.9 0 1 .9 1 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm12 6H7c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
export default InterfacePropertyIcon;
