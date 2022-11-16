function PieChartIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8 8V0c4.42 0 8 3.58 8 8H8ZM1.03 8c0-3.52 2.6-6.42 5.97-6.92V9h7.92c-.49 3.39-3.39 6-6.91 6-3.85 0-6.98-3.13-6.98-7Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default PieChartIcon;
