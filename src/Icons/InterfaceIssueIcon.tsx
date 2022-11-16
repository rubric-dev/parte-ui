function InterfaceIssueIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm0-2A6 6 0 1 0 8 2a6 6 0 0 0 0 12Zm1-2H7v-2h2v2Zm0-3H7V4h2v5Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
export default InterfaceIssueIcon;
