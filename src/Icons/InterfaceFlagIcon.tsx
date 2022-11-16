function InterfaceFlagIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3.285 3.755a.944.944 0 0 0-.941.941V15.05c0 .518.423.942.94.942a.944.944 0 0 0 .942-.942V4.696a.944.944 0 0 0-.941-.94Zm0-2.823a.944.944 0 0 0-.941.94c0 .519.423.942.94.942a.944.944 0 0 0 .942-.941.944.944 0 0 0-.941-.941Zm1.882 2.852v6.804c1.949-1.986 5.572 1.647 8.47 0V3.784c-2.823 1.948-6.53-1.911-8.47 0Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
export default InterfaceFlagIcon;
