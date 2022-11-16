function MediaDesktopIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15 0H1C.45 0 0 .45 0 1v10c0 .55.45 1 1 1h4.75l-.5 2H4c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1h-1.25l-.5-2H15c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1Zm-1 10H2V2h12v8Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
export default MediaDesktopIcon;