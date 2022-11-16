function InterfaceWidgetHeaderIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14 0H2c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1Zm-1 14H3V6h10v8Zm0-9H3V2h10v3Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
export default InterfaceWidgetHeaderIcon;
