import React from 'react';
import { Temperature, Sunrise, Sunset } from './common-items';

function CommonItemsContainer() {
  return (
    <div className="common-items-container">
      <Temperature />
      <Sunrise />
      <Sunset />
    </div>
  );
}

export default CommonItemsContainer;
