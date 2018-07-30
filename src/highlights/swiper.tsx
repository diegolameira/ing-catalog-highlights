import * as React from 'react';
import Slider from 'react-id-swiper/lib/custom';
import CarouselItem from './carousel-item';

export default class Carousel extends React.Component<CarouselProps> {
  static defaultProps: CarouselProps = {
    activeSlideKey: 0
  };
  swiper: any = null;
  settings = {
    // slideClass: "carousel-item",
    activeSlideKey: String(this.props.activeSlideKey),
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
        // slidesPerView: 13
      },
      1200: {
        slidesPerView: 9
      },
      1024: {
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
      slideChangeTransitionStart: () => {
        if (this.swiper === null || this.swiper.destroyed) { return; }
        this.props.onSlideChange(this.swiper.realIndex);
      }
    }
  };
  constructor(props: CarouselProps) {
    super(props);
  }
  render() {
    const items = this.props.items.map((movie, idx) => (
      <CarouselItem key={idx} movie={movie} />
    ));
    return (
      <Slider
        ref={node => (node ? (this.swiper = node.swiper) : null)}
        {...this.settings}
      >
        {items}
      </Slider>
    );
  }
}

interface CarouselProps {
  items: Movie[];
  onSlideChange?: () => any;
  activeSlideKey: number;
}
