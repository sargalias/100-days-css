import React from 'react';
import CssCreationWrapper from 'components/cssCreationWrapper';
import './079-block-dance.scss';

const createBlocks = (numBlocks=10) => {
  const blocks = [];
  for (let i=1; i<=numBlocks; i++)
    blocks.push(<div className={`block block-${i}`} key={i} />);
  return blocks;
};

export default () => (
  <CssCreationWrapper heading="079 - Block dance">
    <div className="block-dance">
      { createBlocks() }
    </div>
  </CssCreationWrapper>
);
