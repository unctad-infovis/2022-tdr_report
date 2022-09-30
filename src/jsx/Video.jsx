import React, { /* useState,  useEffect, useRef */ } from 'react';
import '../styles/styles.less';

// Load helpers.

function Video() {
  return (
    <div>
      <div className="video_container">
        <video src="./assets/vid/Animation website.mp4" autoPlay muted>
          <track default kind="captions" srcLang="en" src="" />
        </video>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Video;
