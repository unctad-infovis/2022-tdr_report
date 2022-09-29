import React, { /* useState, */ useEffect, useRef } from 'react';
import '../styles/styles.less';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import { useIsVisible } from 'react-is-visible';

// Load helpers.
import PhotoHeadline from './helpers/PhotoHeadline.jsx';

function Quote() {
  const chartRef = useRef();

  const isVisible = useIsVisible(chartRef, { once: true });
  useEffect(() => {

  }, []);

  useEffect(() => {
    if (isVisible === true) {
      setTimeout(() => {
        document.querySelectorAll('.quote_container div').forEach(el => el.classList.add('visible'));
      }, 500);
    }
  }, [isVisible]);

  return (
    <div className="app">
      <div ref={chartRef}>
        {(isVisible) && (
          <div className="quote_container">
            <div className="quote_element quote_mark">
              &quot;&quot;
            </div>
            <div className="quote_element quote_text_upper">
              Quote text upper
            </div>
            <div className="quote_element quote_text_lower">
              Quote text lower
            </div>
            <div className="quote_element quote_signature">
              Singature
            </div>
          </div>
        )}
      </div>
      <PhotoHeadline img="img" text_upper="Not highlighted" text_lower="highlighted" />
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Quote;
