function InterfaceLayerIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16 8c0-.37-.21-.68-.51-.85l.01-.01-7-4-.01.01A.94.94 0 0 0 8 3a.94.94 0 0 0-.49.15l-.01-.02-7 4 .01.01C.21 7.32 0 7.63 0 8s.21.68.51.85l-.01.01 7 4 .01-.01c.15.09.31.15.49.15s.34-.06.49-.15l.01.01 7-4-.01-.01c.3-.17.51-.48.51-.85Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
export default InterfaceLayerIcon;
