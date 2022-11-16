function MediaEjectIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="#8F95B2"
        fill-rule="evenodd"
        d="M4 9h8a1.003 1.003 0 0 0 .71-1.71l-4-4A.997.997 0 0 0 8 3c-.28 0-.53.11-.71.29l-4 4A1.003 1.003 0 0 0 4 9Zm8 1H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
export default MediaEjectIcon;