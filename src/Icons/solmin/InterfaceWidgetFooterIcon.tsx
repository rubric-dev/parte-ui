function InterfaceWidgetFooterIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14 0H2c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1Zm-1 14H3v-3h10v3Zm0-4H3V2h10v8Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
export default InterfaceWidgetFooterIcon;
