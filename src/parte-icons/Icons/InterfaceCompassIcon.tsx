function InterfaceCompassIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 8c0 .14-.03.27-.08.39l-3 6.99c-.15.37-.51.62-.92.62-.41 0-.77-.25-.92-.61l-3-6.99a1.006 1.006 0 0 1 0-.79l3-6.99C7.23.25 7.59 0 8 0c.41 0 .77.25.92.61l3 6.99c.05.13.08.26.08.4ZM8 3.54 6.09 8h3.82L8 3.54Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
export default InterfaceCompassIcon;
