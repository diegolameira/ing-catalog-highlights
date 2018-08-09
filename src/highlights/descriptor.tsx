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
          <div className="ing-carouselDescription">
            <span className="ing-carouselDescription__tagTitle">{this.props.tag}</span>
            <a className="ing-carouselDescription__link" onClick={() => onClick && onClick(currentItem, current)}>
              <h1 className="ing-carouselDescription__title line-clamp-2">
                {currentItem.title}
              </h1>
            </a>
            <div className="ing-carouselDescription__tags">
              {currentItem.tags &&
                currentItem.tags.filter(t => t !== this.props.tag).map((tag, key) => (
                  <span
                    className={`ing-carouselDescription__tagItem tag tag-category-${slugify(tag, { lower: true })}`}
                    key={key}
                  >
                    {tag}
                  </span>
                ))}
              {currentItem.genres &&
                currentItem.genres.map((tag, key) => (
                  <span className="ing-carouselDescription__tagItem tag tag-genre" key={key}>
                    {tag}
                  </span>
                ))}
            </div>
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
