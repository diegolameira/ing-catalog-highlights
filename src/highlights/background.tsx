import * as React from 'react';
import { connect } from 'react-redux';

import { getMovieBackground } from './service';

class Background extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { items = [], current = 0 } = this.props;

    return (
      <div className="ing-carouselBackground container">
        <div className="ing-carouselBackground__inner">
          {
            items
              .map(getMovieBackground)
              .map((url, key) => <img key={key} src={url} />)[current]
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: { current: number }) => state;

export default connect<{}, {}, Props>(mapStateToProps)(Background);

interface Props {
  items: Movie[];
  current?: number;
}
