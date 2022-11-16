function GridViewIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M0 1v6h7V0H1C.45 0 0 .45 0 1Zm0 14c0 .55.45 1 1 1h6V9H0v6ZM15 0H9v7h7V1c0-.55-.45-1-1-1ZM9 16h6c.55 0 1-.45 1-1V9H9v7Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default GridViewIcon;
