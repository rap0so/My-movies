export const IMAGERY_URL = 'https://image.tmdb.org/t/p/w500/';

const createImagePath = (img: string) => `${IMAGERY_URL}${img}`;

export default createImagePath;
