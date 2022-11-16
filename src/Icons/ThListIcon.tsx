function ThListIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15 1H1c-.6 0-1 .5-1 1v12c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1Zm-1 12H2v-2h12v2Zm0-3H2V8h12v2Zm0-3H2V5h12v2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default ThListIcon;
