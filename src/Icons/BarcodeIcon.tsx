function BarcodeIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M0 14h2V2H0v12Zm6 0h1V2H6v12Zm2 0h1V2H8v12Zm-5 0h2V2H3v12ZM15 2v12h1V2h-1Zm-5 12h1V2h-1v12Zm2 0h2V2h-2v12Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default BarcodeIcon;
