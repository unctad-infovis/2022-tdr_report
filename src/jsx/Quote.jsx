import React, { /* useState, */ useEffect, useRef } from 'react';
import '../styles/styles.less';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import { useIsVisible } from 'react-is-visible';

// Load helpers.

function Quote() {
  const chartRef = useRef();

  const isVisible = useIsVisible(chartRef, { once: true });
  useEffect(() => {

  }, []);

  useEffect(() => {
    if (isVisible === true) {
      setTimeout(() => {
        document.querySelectorAll('.quote_container div').forEach(el => el.classList.add('visible'));
      }, 700);
    }
  }, [isVisible]);

  return (
    <div>
      <div ref={chartRef}>
        {(isVisible) && (
          <div className="quote_container">
            <div className="quote_element quote_mark">
              &quot;&quot;
            </div>
            <div className="quote_element quote_text_upper">
              There is still time to step back from the edge of recession.
            </div>
            <div className="quote_element quote_text_lower">
              The current course of action is hurting the most vulnerable. This is a matter of policy choices and political will.
            </div>
            <div className="quote_element quote_signature">
              <div className="title">UNCTAD Secretary-General</div>
              <div className="name">Rebeca Grynspan</div>
            </div>
          </div>
        )}
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Quote;
