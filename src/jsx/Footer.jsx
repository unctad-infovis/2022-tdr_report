import React, { /* useState,  useEffect, useRef */ } from 'react';
import '../styles/styles.less';

// Load helpers.

function Footer() {
  return (
    <>
      <div className="footer_container">
        <h2>What do you want to do next</h2>
        <div className="footer_elements">
          <div className="footer_element">
            <h3>Multimedia</h3>
            <p>Listen the Weekly Tradecast episode where the Author Mr. xxxx xxxx highlights the report</p>
            <div className="iframe_container">
              <iframe loading="eager" title="The Weekly Tradecast by UNCTAD" height="300" width="100%" style={{ border: 'none', minWidth: '100%' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=xyr2d-1269cec-pb&btn-skin=009EDB&download=1&font-color=000000&fonts=Verdana&from=pb6admin&logo_link=none&rtl=0&share=0&size=300&skin=1&square=1" allowFullScreen={false} />
            </div>
            <ul className="podcasts_container">
              <li>
                <span className="icon" />
                <span className="text"><a href="https://unctad.org/podcast/ghosts-recessions-past-history-repeating-itself">Listen: Ghosts of recessions past</a></span>
              </li>
              <li>
                <span className="icon" />
                <span className="text"><a href="https://unctad.org/podcast/drowning-debt-how-developing-countries-can-survive-crisis">Listen: Drowning in debt</a></span>
              </li>
              <li>
                <span className="icon" />
                <span className="text"><a href="https://unctad.org/podcast/war-and-price-cost-rising-inflation">Listen: The cost of rising inflation</a></span>
              </li>
            </ul>
            <ul className="videos_container">
              <li>
                <span className="icon" />
                <span className="text">Watch the press conference</span>
              </li>
              <li>
                <span className="icon" />
                <span className="text">See the promotional video</span>
              </li>
            </ul>
          </div>
          <div className="footer_element">
            <h3><a href="https://unctad.org/webflyer/trade-and-development-report-2022">Download the report</a></h3>
            <h3><a href="#press">Read the press release</a></h3>
          </div>
          <div className="footer_element">
            <h3>Regional outlooks</h3>
            <ul>
              <li>
                Africa
                <ul>
                  <li>
                    <a href="#english">english</a>
                    {', '}
                    <a href="#english">arabic</a>
                    {', '}
                    <a href="#english">chinese</a>
                    {', '}
                    <a href="#english">french</a>
                    {', '}
                    <a href="#english">russian</a>
                    {', '}
                    <a href="#english">spanish</a>
                  </li>
                </ul>
              </li>
              <li>
                East and Southeast Asia
                <ul>
                  <li>
                    <a href="#english">english</a>
                    {', '}
                    <a href="#english">arabic</a>
                    {', '}
                    <a href="#english">chinese</a>
                    {', '}
                    <a href="#english">french</a>
                    {', '}
                    <a href="#english">russian</a>
                    {', '}
                    <a href="#english">spanish</a>
                  </li>
                </ul>
              </li>
              <li>
                West and South Asia
                <ul>
                  <li>
                    <a href="#english">english</a>
                    {', '}
                    <a href="#english">arabic</a>
                    {', '}
                    <a href="#english">chinese</a>
                    {', '}
                    <a href="#english">french</a>
                    {', '}
                    <a href="#english">russian</a>
                    {', '}
                    <a href="#english">spanish</a>
                  </li>
                </ul>
              </li>
              <li>
                Latin America
                <ul>
                  <li>
                    <a href="#english">english</a>
                    {', '}
                    <a href="#english">arabic</a>
                    {', '}
                    <a href="#english">chinese</a>
                    {', '}
                    <a href="#english">french</a>
                    {', '}
                    <a href="#english">russian</a>
                    {', '}
                    <a href="#english">spanish</a>
                  </li>
                </ul>
              </li>
              <li>
                Developed economies
                <ul>
                  <li>
                    <a href="#english">english</a>
                    {', '}
                    <a href="#english">arabic</a>
                    {', '}
                    <a href="#english">chinese</a>
                    {', '}
                    <a href="#english">french</a>
                    {', '}
                    <a href="#english">russian</a>
                    {', '}
                    <a href="#english">spanish</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </>
  );
}

export default Footer;
