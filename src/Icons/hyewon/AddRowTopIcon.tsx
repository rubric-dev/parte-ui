function AddRowTopIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1Zm-1 14H2v-3h12v3Zm0-4H2V2h12v8ZM6 7h1v1c0 .55.45 1 1 1s1-.45 1-1V7h1c.55 0 1-.45 1-1s-.45-1-1-1H9V4c0-.55-.45-1-1-1s-1 .45-1 1v1H6c-.55 0-1 .45-1 1s.45 1 1 1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default AddRowTopIcon;
