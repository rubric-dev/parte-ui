function UnderlineIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M13 9c0 2.8-2.2 5-5 5s-5-2.2-5-5V3c0-.6.4-1 1-1s1 .4 1 1v6c0 1.7 1.3 3 3 3s3-1.3 3-3V3c0-.6.4-1 1-1s1 .4 1 1v6ZM2 15.5c0-.3.2-.5.5-.5h11c.3 0 .5.2.5.5s-.2.5-.5.5h-11c-.3 0-.5-.2-.5-.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default UnderlineIcon;
