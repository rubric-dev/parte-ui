function ColumnLayoutIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1ZM4 13H2V3h2v10Zm3 0H5V3h2v10Zm7 0H8V3h6v10Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default ColumnLayoutIcon;
