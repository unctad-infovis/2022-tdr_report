import React, { /* useState, useEffect, useRef  */} from 'react';
import '../styles/styles.less';

// https://www.npmjs.com/package/scroll-into-view
import scrollIntoView from 'scroll-into-view';

// Load helpers.

const anchorClick = (item_id) => {
  setTimeout(() => {
    scrollIntoView(document.querySelector(`#app${item_id}`), {
      align: {
        left: 0,
        leftOffset: 0,
        lockX: false,
        lockY: false,
        top: 0,
        topOffset: 100
      },
      cancellable: false,
      time: 500
    });
  }, 200);
};

function PageNavigation() {
  return (
    <div>
      <div className="pagenavigation_container">
        <div className="navigation">
          <button type="button" onClick={() => anchorClick('')}>Press material</button>
          <button type="button" onClick={() => anchorClick('')}>Download report</button>
          <button type="button" onClick={() => anchorClick('')}>Multimedia content</button>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default PageNavigation;
