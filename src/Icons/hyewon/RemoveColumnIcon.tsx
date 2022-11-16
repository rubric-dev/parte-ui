function RemoveColumnIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14 0H4c-.55 0-1 .45-1 1v3h2V2h3v12H5v-2H3v3c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1Zm-1 14h-3V2h3v12Zm-8.71-3.29a1.003 1.003 0 0 0 1.42-1.42L4.41 8 5.7 6.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L3 6.59l-1.29-1.3A1.003 1.003 0 0 0 .29 6.71L1.59 8 .29 9.29a1.003 1.003 0 0 0 1.42 1.42L3 9.41l1.29 1.3Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default RemoveColumnIcon;
