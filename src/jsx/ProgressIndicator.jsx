import React, { /* useState, useEffect, useRef */ } from 'react';
import PropTypes from 'prop-types';

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
        topOffset: 0
      },
      cancellable: false,
      time: 1000
    });
  }, 50);
};

function ProgressIndicator({
  section1Progress, section2Progress, section3Progress, section4Progress
}) {
  return (
    <>
      <div className="progress_indicator_container">
        <button type="button" className="section" onClick={() => anchorClick('.section_1_container')}>
          <div className="progress" style={{ width: `${section1Progress}%` }} />
        </button>
        <div className="section_divider" />
        <button type="button" className="section" onClick={() => anchorClick('.section_2_container')}>
          <div className="progress" style={{ width: `${section2Progress}%` }} />
        </button>
        <div className="section_divider" />
        <button type="button" className="section" onClick={() => anchorClick('.section_3_container')}>
          <div className="progress" style={{ width: `${section3Progress}%` }} />
        </button>
        <div className="section_divider" />
        <button type="button" className="section" onClick={() => anchorClick('.section_4_container')}>
          <div className="progress" style={{ width: `${section4Progress}%` }} />
        </button>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </>
  );
}

ProgressIndicator.propTypes = {
  section1Progress: PropTypes.number,
  section2Progress: PropTypes.number,
  section3Progress: PropTypes.number,
  section4Progress: PropTypes.number
};

ProgressIndicator.defaultProps = {
  section1Progress: 0,
  section2Progress: 0,
  section3Progress: 0,
  section4Progress: 0
};

export default ProgressIndicator;
