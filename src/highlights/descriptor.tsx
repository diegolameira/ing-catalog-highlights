import * as React from 'react';
import { connect } from 'react-redux';
import slugify from 'slugify';

class Descriptor extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { items = [], current = 0, onClick } = this.props;
    const currentItem = items[current] || {};
    return (
      items.length && (
        <div className="ing-highlights-descriptor">
          <h1>
            <a onClick={() => onClick && onClick(currentItem, current)}>
              {currentItem.title}
            </a>
          </h1>
          <div className="ing-highlights-descriptor-tags">
            {currentItem.tags &&
              currentItem.tags.map((tag, key) => (
                <span
                  className={`tag tag-category-${slugify(tag, { lower: true })}`}
                  key={key}
                >
                  {tag}
                </span>
              ))}
            {currentItem.genres &&
              currentItem.genres.map((tag, key) => (
                <span className="tag tag-genre" key={key}>
                  {tag}
                </span>
              ))}
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = state => ({
  current: state.current
});

export default connect<{}, {}, Props>(mapStateToProps)(Descriptor);

interface Props {
  items?: Movie[];
  current?: number;
  onClick?: (movie: Movie, idx: number) => void;
}
