function HeatmapIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm11-7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm3 4.5A2.5 2.5 0 0 0 13.5 6c-.98 0-1.82.57-2.23 1.39-.6-.78-1.51-1.3-2.56-1.36.18-.49.29-.99.29-1.53C9 2.01 6.99 0 4.5 0S0 2.01 0 4.5 2.01 9 4.5 9c.19 0 .37-.03.56-.06-.03.19-.06.37-.06.56C5 11.43 6.57 13 8.5 13c1.63 0 2.98-1.11 3.37-2.62.44.38 1 .62 1.63.62A2.5 2.5 0 0 0 16 8.5ZM14.5 13c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default HeatmapIcon;
