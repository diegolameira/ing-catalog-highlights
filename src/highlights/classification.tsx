import * as React from 'react';

interface ClassificationProps {
  rating?: string;
}
export const Classification = ({ rating = '' }: ClassificationProps) => {
  const parsed = parseInt(rating, 10);
  if (parsed) {
    return comp(`tag tag-classification-${parsed}`, parsed);
  }
  if (rating === 'Livre') {
    return comp('tag tag-classification-free', 'L');
  }
  return comp('tag-no-classification', rating);
  function comp(tagClasses: string, label: string | number) {
    return (<span className={`${tagClasses} ing-carouselItemRating`}>{label}</span>);
  }
};