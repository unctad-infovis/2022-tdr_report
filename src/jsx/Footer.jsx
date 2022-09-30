import React, { /* useState,  useEffect, useRef */ } from 'react';
import '../styles/styles.less';

// Load helpers.

function Footer() {
  return (
    <div>
      <div className="footer_container">
        <h2>What do you want to see next</h2>
        <div className="footer_elements">
          <div className="footer_element">
            <h3>Multimedia</h3>
            <ul>
              <li>Podcast about debt</li>
              <li>Podcast about inflation</li>
              <li>Podcast about recession</li>
            </ul>
            <ul>
              <li>Watch the press conference</li>
              <li>Promotional video</li>
            </ul>
          </div>
          <div className="footer_element">
            <h3>Download the report</h3>
          </div>
          <div className="footer_element">
            <h3>Press material</h3>
            <ul>
              <li>Press release</li>
            </ul>
          </div>
          <div className="footer_element">
            <h3>Regional outlooks</h3>
            <ul>
              <li>Africa: english, spanish, russian, etc</li>
              <li>East and Southeast Asia: english, spanish, russian, etc</li>
              <li>West and South Asia: english, spanish, russian, etc</li>
              <li>Latin America: english, spanish, russian, etc</li>
              <li>Developed economies: english, spanish, russian, etc</li>
            </ul>
          </div>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Footer;
