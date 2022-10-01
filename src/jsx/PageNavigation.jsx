import React, { /* useState, useEffect, useRef  */} from 'react';
import '../styles/styles.less';

// https://www.npmjs.com/package/scroll-into-view
import scrollIntoView from 'scroll-into-view';

// Load helpers.

const anchorClick = () => {
  setTimeout(() => {
    scrollIntoView(document.querySelector('.footer_container'), {
      align: {
        left: 0,
        leftOffset: 0,
        lockX: false,
        lockY: false,
        top: 0,
        topOffset: -100
      },
      cancellable: false,
      time: 1000
    });
  }, 50);
};

function PageNavigation() {
  return (
    <>
      <div className="pagenavigation_container">
        <div className="navigation">
          <button type="button" onClick={() => anchorClick('')}>Press</button>
          <button type="button" onClick={() => anchorClick('')}>Download</button>
          <button type="button" onClick={() => anchorClick('')}>Multimedia</button>
          <button type="button" onClick={() => anchorClick('')}>Regional outlooks</button>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </>
  );
}

export default PageNavigation;
