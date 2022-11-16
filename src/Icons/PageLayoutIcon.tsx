function PageLayoutIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15 .95H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-12c0-.55-.45-1-1-1Zm-9 12H2v-6h4v6Zm8 0H7v-6h7v6Zm0-7H2v-3h12v3Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default PageLayoutIcon;
