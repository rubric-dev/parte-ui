function ThFilteredIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16 .57c0-.31-.21-.57-.52-.57H8.57C8.26 0 8 .26 8 .57c0 .16.06.3.17.41L11 3.71v3.74c0 .31.26.57.57.57.16 0 .31-.07.41-.17l.82-1.1c.11-.11.17-.25.17-.41V3.71L15.83.98c.11-.11.17-.25.17-.41ZM13 10H7V8h2V7H7V5h2v-.7L5.333 1H1c-.6 0-1 .5-1 1v12c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V3.4l-1 .9v2.85a1 1 0 0 1-.22.624L13 10Zm-7 1v2H2v-2h4Zm0-1V8H2v2h4Zm0-5v2H2V5h4Zm8 8v-2H7v2h7Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default ThFilteredIcon;
