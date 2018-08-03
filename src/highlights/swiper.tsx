import * as React from 'react';
import Slider from 'react-id-swiper/lib/custom';
import CarouselItem from './carousel-item';

function make(): Movie[] {
  return Array.from({length: 10}, () => ({
    id: '',
    title: '',
    siteURL: '',
  }));
}

export default class Carousel extends React.Component<CarouselProps> {
  static defaultProps: CarouselProps = {
    items: []
  };
  swiper: Swiper;
  settings = {
    // slideClass: "carousel-item",
    oberserver: true,
    watchSlidesVisibility: true,
    shouldSwiperUpdate: true,
    rebuildOnUpdate: true,
    loop: true,
    lazy: true,
    autoHeight: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true
    },
    centeredSlides: true,
    initialSlide: 0,
    slidesPerView: 9,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      2560: {
        slidesPerView: 9
      },
      1440: {
        slidesPerView: 7
      },
      768: {
        initialSlide: 2,
        slidesPerView: 5,
        spaceBetween: 20
      },
      425: {
        initialSlide: 1,
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    on: {
      transitionEnd: () => {
        if (!this.swiper || this.swiper.destroyed) { return; }
        if (typeof this.props.onSlideChange === 'function') {
          this.props.onSlideChange(this.swiper.realIndex);
        }
      }
    }
  };
  constructor(props: CarouselProps) {
    super(props);
  }
  render() {
    const array = this.props.items.length ? this.props.items : make();
    const items = array.map((movie, idx) => (
      <CarouselItem
        key={idx}
        movie={movie}
        onClick={() => {
          if (typeof window.trackHighlightsProductClick === 'function') {
            window.trackHighlightsProductClick('Home - Highlights', movie, idx);
          }
          window.location.href = movie.siteURL;
        }}
      />
    ));
    return (
      <div
        className="swiper-ingresso"
      >
        <Slider
          ref={(node: {swiper: Swiper}) => (node ? (this.swiper = node.swiper) : null)}
          {...this.settings}
        >
          {items}
        </Slider>
      </div>
    );
  }
}

interface CarouselProps {
  items: Movie[];
  onSlideChange?: (currentIndex: number) => void;
}
