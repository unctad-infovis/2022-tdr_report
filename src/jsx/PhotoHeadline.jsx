import React, { /* useState, useEffect, useRef */ } from 'react';
import PropTypes from 'prop-types';

function PhotoHeadline({ img, text_lower, text_upper }) {
  return (
    <>
      <div className="photo_headline_container" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundImage: `url(./assets/img/${img})` }}>
        <div className="photo_headline_content">
          <div className="photo_headlines">
            <h2 className="">{text_upper}</h2>
            <h2 className="highlight">{text_lower}</h2>
          </div>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </>
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
