import * as React from 'react';
import { connect } from 'react-redux';
import slugify from 'slugify';

class Descriptor extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { items = [], current = 0, onClick } = this.props;
    return (
      items.length && (
        <div className="container">
          <a
            className="ing-carouselDescription__link"
            onClick={() => onClick && onClick(items[current], current)}
          >
            <div className="ing-carouselDescription">
              <span className="ing-carouselDescription__tagTitle">
                {this.props.tag}
              </span>
              {items.map((item: Movie, idx: number) => (
                <div
                  className="ing-carouselDescription__titleWrapper"
                  key={`title-${idx}`}
                  data-active={items.indexOf(item) === current}
                >
                  <h1 className="ing-carouselDescription__title line-clamp-2">
                    {item.title}
                  </h1>

                  <div className="ing-carouselDescription__tags">
                    {item.tags &&
                      item.tags
                        .filter(t => t !== this.props.tag)
                        .map((tag, key) => (
                          <span
                            className={`ing-carouselDescription__tagItem tag tag-category-${slugify(
                              tag,
                              { lower: true },
                            )}`}
                            key={key}
                          >
                            {tag}
                          </span>
                        ))}
                    {item.genres &&
                      item.genres.map((tag, key) => (
                        <span
                          className="ing-carouselDescription__tagItem tag tag-genre"
                          key={key}
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </a>
        </div>
      )
    );
  }
}

const mapStateToProps = state => ({
  current: state.current,
});

export default connect<{}, {}, Props>(mapStateToProps)(Descriptor);

interface Props {
  tag?: string;
  items?: Movie[];
  current?: number;
  onClick?: (movie: Movie, idx: number) => void;
}
