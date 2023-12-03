const icons = {
  noFavorite: {
    title: "noFavorite",
    viewBox: "0 0 24 24",
    path: "M16.5 4.5c2.206 0 4 1.794 4 4c0 4.669-5.543 8.941-8.5 11.023C9.043 17.441 3.5 13.169 3.5 8.5c0-2.206 1.794-4 4-4a4.01 4.01 0 0 1 3.273 1.706L12 7.953l1.227-1.746A4.008 4.008 0 0 1 16.5 4.5m0-1.5A5.49 5.49 0 0 0 12 5.344A5.49 5.49 0 0 0 7.5 3A5.5 5.5 0 0 0 2 8.5c0 5.719 6.5 10.438 10 12.85c3.5-2.412 10-7.131 10-12.85A5.5 5.5 0 0 0 16.5 3z",
  },
  favorite: {
    title: "favorite",
    viewBox: "0 0 24 24",
    path: "M16.5 3A5.49 5.49 0 0 0 12 5.344A5.49 5.49 0 0 0 7.5 3A5.5 5.5 0 0 0 2 8.5c0 5.719 6.5 10.438 10 12.85c3.5-2.412 10-7.131 10-12.85A5.5 5.5 0 0 0 16.5 3z",
  },
  home: {
    title: "home",
    viewBox: "0 0 24 24",
    path: "M6 19h3.692v-5.885h4.616V19H18v-9l-6-4.538L6 10v9Zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.885h-2.616V20H5Zm7-7.77Z",
  },

  plus: {
    title: "plus",
    viewBox: "0 0 24 24",
    path: "M7 12h4V8h1v4h4v1h-4v4h-1v-4H7v-1m4.5-9a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4Z",
  },
};

export default function Icon({ variant, color, size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={icons[variant].viewBox}
      fill={color}
      width={size}
    >
      <title>{icons[variant].title}</title>
      <path d={icons[variant].path} />
    </svg>
  );
}