function ActionImportIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.29 11.71c.18.18.43.29.71.29.28 0 .53-.11.71-.29l4-4a1.003 1.003 0 00-1.42-1.42L9 8.59V1c0-.55-.45-1-1-1S7 .45 7 1v7.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l4 4zM15 11c-.55 0-1 .45-1 1v2H2v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1z"
        fill="#8F95B2"
      />
    </svg>
  );
}

export default ActionImportIcon;