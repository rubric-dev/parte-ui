function ActionDownloadIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7.995 0A7.993 7.993 0 000 7.995a7.993 7.993 0 007.995 7.996 7.993 7.993 0 007.996-7.996A7.993 7.993 0 007.995 0zm3.708 9.704l-2.998 2.998c-.18.18-.43.29-.71.29-.28 0-.53-.11-.71-.29L4.288 9.704a1.002 1.002 0 011.42-1.42l1.289 1.29V3.998c0-.55.45-1 1-1 .549 0 .999.45.999 1v5.586l1.289-1.289a1.002 1.002 0 011.709.71c0 .27-.11.52-.29.7z"
        fill="#8F95B2"
      />
    </svg>
  );
}

export default ActionDownloadIcon;
