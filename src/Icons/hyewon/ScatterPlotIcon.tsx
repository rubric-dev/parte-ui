function ScatterPlotIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15 12H2V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1Zm-.5-7c.83 0 1.5-.67 1.5-1.5S15.33 2 14.5 2 13 2.67 13 3.5 13.67 5 14.5 5Zm-3 4c.83 0 1.5-.67 1.5-1.5S12.33 6 11.5 6 10 6.67 10 7.5 10.67 9 11.5 9Zm-4-2C8.33 7 9 6.33 9 5.5S8.33 4 7.5 4 6 4.67 6 5.5 6.67 7 7.5 7Zm-3 4c.83 0 1.5-.67 1.5-1.5S5.33 8 4.5 8 3 8.67 3 9.5 3.67 11 4.5 11Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default ScatterPlotIcon;
