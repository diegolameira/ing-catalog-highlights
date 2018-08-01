import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Background from './background';
import Carousel from './swiper';
import Descriptor from './descriptor';

import { getHighlights } from './service';
import { setCurrent } from './actions';

interface State {
  movies: Movie[];
}

class Highlights extends React.Component<MainProps, State> {
  static defaultProps: MainProps = {
    movies: [],
    initialIndex: 0
  };
  props: MainProps;
  state: State = {
    movies: this.props.movies || []
  };

  componentDidUpdate(prevProps: MainProps, prevState: State) {
    if (
      typeof window.trackHighlightsProductList === 'function' &&
      prevState.movies !== this.state.movies
    ) {
      window.trackHighlightsProductList(this.state.movies, 'Home - Highlights');
    }
  }

  componentDidMount() {
    const { initialIndex, movies } = this.props;
    if (!movies || !movies.length) {
      this.load();
    } else if (typeof window.trackHighlightsProductList === 'function') {
      window.trackHighlightsProductList(movies, 'Home - Highlights');
    }
    if (this.props.setCurrent && initialIndex) {
      this.props.setCurrent(initialIndex);
    }
  }

  load() {
    const { cityId, partnership, limit, tag } = this.props;
    getHighlights(cityId, partnership, limit, tag).then(movies => {
      this.setState({
        movies
      });
    });
  }

  render() {
    const { movies } = this.state;
    const { isMobileOnly } = this.props;
    return (
      <div className={`ing-carousel ${isMobileOnly ? 'mobile-only' : ''}`}>
        <div className="ing-carousel__inner">
          <Background items={movies} current={0} />
          <Descriptor
            tag={this.props.tag}
            items={movies}
            onClick={(movie: Movie, idx: number) => {
              if (typeof window.trackHighlightsProductClick === 'function') {
                window.trackHighlightsProductClick('Home - Highlights', movie, idx);
              }
              window.location.href = movie.siteURL;
            }}
          />
          <Carousel
            items={movies}
            onSlideChange={currentItemIndex => {
              if ( this.props.setCurrent) {
                this.props.setCurrent(currentItemIndex);
              }
            }}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      setCurrent
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Highlights);
