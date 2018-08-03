import * as React from 'react';

import { getMovieCover } from './service';

export default ({ movie, onClick }: CarouselItemProps) => (
  <div className="swiper-slide ing-carouselItem">
    <div className="ing-carouselItem__inner">
      <a
        href={movie.siteURL}
        className="ing-carouselItem__link"
        onClick={() => onClick && onClick()}
      >
        <img src={getMovieCover(movie)} className="ing-carouselItem__cover" />
        <span className="ing-carouselItem__title">
          <span className="ing-carouselItem__title__inner line-clamp-2">
            {movie.title}
          </span>
        </span>
      </a>
    </div>
  </div>
);

interface CarouselItemProps {
  movie: Movie;
  onClick?: () => void;
}
