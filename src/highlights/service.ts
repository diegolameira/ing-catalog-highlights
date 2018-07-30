const placeholder =
  '//ingresso-a.akamaihd.net/catalog/Content/img/placeholder-movie-image-13223897b1.jpg';

export const getHighlights = async (
  cityId: number = 2,
  partnership: string = 'home',
  limit: number = 10,
  tag: string = 'Em Alta'
) => {
  const url = `//api-content.ingresso.com/v0/events/city/${cityId}/partnership/${partnership}?limit=${limit}`;
  const highlights = await fetch(url)
    .then(r => r.json())
    .then(({ items }) => items);
  return highlights.filter(({ tags = [] }: Movie) =>
    tags.join(' ').includes(tag)
  );
};

const getImageFromMovie = (
  images: Image[] = [],
  type: string = 'PosterPortrait'
) => {
  if (!images.length) {
    return placeholder;
  }
  const img = images.find((i: {type: string}) => i.type === type);
  return img && img.url ? img.url : placeholder;
};

export const getMovieCover = ({ images }: Movie) =>
  getImageFromMovie(images, 'PosterPortrait');

export const getMovieBackground = ({ images }: Movie) =>
  getImageFromMovie(images, 'PosterHorizontal');
