function ExcludeRowIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M0 10a1.003 1.003 0 0 0 1.71.71L3 9.41l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L4.41 8 5.7 6.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L3 6.59l-1.29-1.3A1.003 1.003 0 0 0 .29 6.71L1.59 8 .29 9.29C.11 9.47 0 9.72 0 10Zm1-7h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1Zm14 10H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1Zm-1-7H9c-1.1 0-2 .9-2 2s.9 2 2 2h5c1.1 0 2-.9 2-2s-.9-2-2-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default ExcludeRowIcon;
