function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14 10H7.72l-.33-1H13c.39 0 .72-.23.89-.56h.01l2-4h-.01c.06-.13.11-.28.11-.44 0-.55-.45-1-1-1H5.39l-.44-1.32h-.01C4.8 1.29 4.44 1 4 1H1c-.55 0-1 .45-1 1s.45 1 1 1h2.28l2.33 7H4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2h6c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2ZM6.05 5h7.33l-1 2H6.72l-.67-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default ShoppingCartIcon;
