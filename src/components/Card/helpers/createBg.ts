const createBg = (img: string | null, fallback: string) =>
  `url(${img || fallback})`;

export default createBg;
