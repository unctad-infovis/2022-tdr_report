import React, { /* useState, */ useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../../styles/styles.less';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import { useIsVisible } from 'react-is-visible';

// Load helpers.

function PhotoHeadline({ img, text_lower, text_upper }) {
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
          <div className="photo_headline_container" style={{ backgroundImage: `url(${img})` }}>
            <h2 className="">{text_upper}</h2>
            <h2 className="highlight">{text_lower}</h2>
          </div>
        )}
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

PhotoHeadline.propTypes = {
  img: PropTypes.string.isRequired,
  text_upper: PropTypes.string.isRequired,
  text_lower: PropTypes.string.isRequired
};

PhotoHeadline.defaultProps = {
};

export default PhotoHeadline;
