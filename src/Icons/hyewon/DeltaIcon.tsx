function DeltaIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8 0 0 16h16L8 0ZM7 5l5 10H2L7 5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default DeltaIcon;
