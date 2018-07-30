import * as React from 'react';

import { getMovieCover } from './service';

export default ({ movie }: CarouselItemProps) => (
  <div className="swiper-slide">
    <div className="ing-highlights-item">
      <a
        className="ing-highlights-item-link"
        onClick={() => {
          if (typeof window.trackProductClick === 'function') {
            window.trackProductClick('Home - Highlights');
          }
          window.location.href = movie.siteURL;
        }}
      >
        <img src={getMovieCover(movie)} />
        <span className="ing-highlights-item-title">{movie.title}</span>
      </a>
    </div>
  </div>
);

interface CarouselItemProps {
  movie: Movie;
}
