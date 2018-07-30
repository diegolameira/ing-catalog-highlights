import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Background from './background';
import Carousel from './swiper';
import Descriptor from './descriptor';
import './style.css';

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
    movies: this.props.movies
  };

  componentDidUpdate(prevProps: MainProps, prevState: State) {
    if (
      typeof window.trackProductList === 'function' &&
      prevState.movies !== this.state.movies
    ) {
      window.trackProductList(this.state.movies, 'Home - Highlights');
    }
  }

  componentDidMount() {
    const { initialIndex, movies } = this.props;
    if (!movies || !movies.length) {
      this.load();
    } else if (typeof window.trackProductList === 'function') {
      window.trackProductList(movies, 'Home - Highlights');
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
    return (
      <div id="ing-highlights">
        <Background items={movies} current={this.props.initialIndex} />
        <div className="container">
          <div className="ing-highlights-description">
            <span className="ing-highlights-tag">{this.props.tag}</span>
            <Descriptor items={movies} />
          </div>
        </div>
        <Carousel
          items={movies}
          onSlideChange={currentItemIndex =>
            this.props.setCurrent(currentItemIndex)
          }
          activeSlideKey={this.props.initialIndex - 1}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
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
