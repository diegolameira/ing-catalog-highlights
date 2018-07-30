import * as React from 'react';
import { connect } from 'react-redux';

import { getMovieBackground } from './service';

const Background = ({ items = [], current = 0 }: Props) => (
  <div className="ing-highlights-background container">
    <div className="ing-highlights-background-inner">
      {
        items
          .map(getMovieBackground)
          .map((url, key) => <img key={key} src={url} />)[current]
      }
    </div>
  </div>
);

const mapStateToProps = (state: { current: number }) => ({
  current: state.current
});

export default connect(mapStateToProps)(Background);

interface Props {
  items?: Movie[];
  current?: number;
}
