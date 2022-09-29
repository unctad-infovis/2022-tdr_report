import React, { /* useState, */ useEffect, useRef } from 'react';
import '../styles/styles.less';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import { useIsVisible } from 'react-is-visible';

// Load helpers.

function Video() {
  const chartRef = useRef();

  const isVisible = useIsVisible(chartRef, { once: true });
  useEffect(() => {

  }, []);

  useEffect(() => {
    if (isVisible === true) {
      // Video play
    }
  }, [isVisible]);

  return (
    <div className="app">
      <div ref={chartRef}>
        {(isVisible) && (
          <div className="video_container">
            <video controls src="">
              <track default kind="captions" srcLang="en" src="" />
            </video>
          </div>
        )}
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Video;
