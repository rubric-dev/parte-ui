function BlankIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path fill="#8F95B2" d="M0 0h16v16H0z" />
    </svg>
  );
}

export default BlankIcon;
