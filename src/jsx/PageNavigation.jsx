import React, { /* useState, useEffect, useRef  */} from 'react';

// https://www.npmjs.com/package/scroll-into-view
import scrollIntoView from 'scroll-into-view';

const anchorClick = (target) => {
  setTimeout(() => {
    scrollIntoView(document.querySelector(target), {
      align: {
        left: 0,
        leftOffset: 0,
        lockX: false,
        lockY: false,
        top: 0,
        topOffset: 100
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
          <div className="button_container"><button type="button" onClick={() => anchorClick('.footer_element_downloads')}>Press</button></div>
          <div className="button_container"><button type="button" onClick={() => anchorClick('.footer_element_downloads')}>Downloads</button></div>
          <div className="button_container"><button type="button" onClick={() => anchorClick('.footer_element_multimedia')}>Multimedia</button></div>
          <div className="button_container"><button type="button" onClick={() => anchorClick('.footer_element_regional')}>Regional outlooks</button></div>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </>
  );
}

export default PageNavigation;
