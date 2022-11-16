function MediaCameraIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15 3h-2.59L10.7 1.29A.956.956 0 0 0 10 1H6c-.28 0-.53.11-.71.29L3.59 3H1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h2.56c1.1 1.22 2.67 2 4.44 2 1.77 0 3.34-.78 4.44-2H15c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1ZM3 6H1V5h2v1Zm5 6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
export default MediaCameraIcon;
