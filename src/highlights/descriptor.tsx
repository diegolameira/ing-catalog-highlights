import * as React from 'react';
import { connect } from 'react-redux';
import slugify from 'slugify';

const Descriptor = ({ items = [], current = 0 }: Props) => {
  const currentItem = items[current];
  return !items.length ? null : (
    (
      <div className="ing-highlights-descriptor">
        <h1>
          <a onClick={() => (window.location.href = currentItem.siteURL)}>
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
};

const mapStateToProps = (state: { current: number }) => ({
  current: state.current
});

export default connect(mapStateToProps)(Descriptor);

interface Props {
  items?: Movie[];
  current?: number;
}
