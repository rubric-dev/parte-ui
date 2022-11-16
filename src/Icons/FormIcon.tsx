function FormIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2 11v2h2v-2H2ZM1 9h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1Zm9-6h5c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1ZM6 1a1.003 1.003 0 0 1 .71 1.71l-3 4C3.53 6.89 3.28 7 3 7c-.28 0-.53-.11-.71-.29l-2-2a1.003 1.003 0 0 1 1.42-1.42L3 4.59l2.29-3.3C5.47 1.11 5.72 1 6 1Zm4 10h5c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default FormIcon;
