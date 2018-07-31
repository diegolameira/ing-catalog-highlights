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
        <div className="container">
          <div className="ing-highlights-description">
            <span className="ing-highlights-tag">{this.props.tag}</span>
            <a className="ing-highlights-descriptor" onClick={() => onClick && onClick(currentItem, current)}>
              <h1 className="line-clamp-2">
                {currentItem.title}
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
            </a>
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
  tag?: string;
  items?: Movie[];
  current?: number;
  onClick?: (movie: Movie, idx: number) => void;
}
