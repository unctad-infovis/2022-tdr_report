import React, { /* useState,  useEffect, useRef */ } from 'react';

function Footer() {
  return (
    <>
      <div className="footer_container">
        <h2>What do you want to do next</h2>
        <div className="footer_elements footer_element_downloads">
          <div className="footer_element">
            <h3>Explore the report</h3>
            <ul>
              <li>
                <a href="https://unctad.org/webflyer/trade-and-development-report-2022">Download the report </a>
                <a href="https://unctad.org/webflyer/trade-and-development-report-2022"><img src="./assets/img/2022-tdr_report_cover-min.png" alt="TDR 2022 Cover" /></a>
              </li>
              <li>Read the overview</li>
              <li>
                Read the global press release
                <ul>
                  <li>
                    <a href="https://unctad.org/press-material/unctad-warns-policy-induced-global-recession-inadequate-financial-support-leaves">English</a>
                    {', '}
                    <a href="https://unctad.org/fr/press-material/la-cnuced-met-en-garde-contre-une-recession-mondiale-induite-par-les-politiques">Français</a>
                    {', '}
                    <a href="https://unctad.org/es/press-material/la-unctad-advierte-de-una-ralentizacion-mundial-provocada-por-los-ajustes-de">Español</a>
                    {', '}
                    <a href="https://unctad.org/system/files/press-material/PR22014_ar_TDR22_0.pdf">العربية</a>
                    {', '}
                    <a href="https://unctad.org/system/files/press-material/PR22014_ch_TDR22.pdf">简体中文</a>
                    {', '}
                    <a href="https://unctad.org/system/files/press-material/PR22014_ru_TDR22_0.pdf">Русский</a>
                    {', '}
                    <a href="https://unctad.org/system/files/press-material/PR22014_pt_TDR22.pdf">Português</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="footer_element footer_element_multimedia">
            <h3>Multimedia</h3>
            <p> Listen to the Weekly Tradecast episodes that explore some of the main issues in the report</p>
            <div className="iframe_container">
              <iframe loading="eager" title="The Weekly Tradecast by UNCTAD" height="300" width="100%" style={{ border: 'none', minWidth: '100%' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=xyr2d-1269cec-pb&btn-skin=009EDB&download=1&font-color=000000&fonts=Verdana&from=pb6admin&logo_link=none&rtl=0&share=0&size=300&skin=1&square=1" allowFullScreen={false} />
            </div>
            <ul className="podcasts_container">
              <li>
                <span className="icon" />
                <span className="text"><a href="https://unctad.org/podcast/ghosts-recessions-past-history-repeating-itself">Ghosts of recessions past</a></span>
              </li>
              <li>
                <span className="icon" />
                <span className="text"><a href="https://unctad.org/podcast/drowning-debt-how-developing-countries-can-survive-crisis">Drowning in debt</a></span>
              </li>
              <li>
                <span className="icon" />
                <span className="text"><a href="https://unctad.org/podcast/war-and-price-cost-rising-inflation">The cost of rising inflation</a></span>
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
          <div className="footer_element footer_element_regional">
            <h3>Regional outlooks</h3>
            <ul>
              <li>
                Africa
                <ul>
                  <li><a href="https://unctad.org/press-material/africas-economic-growth-decelerates-sharply">English</a></li>
                  <li><a href="https://unctad.org/fr/press-material/la-croissance-economique-de-lafrique-ralentit-fortement">Français</a></li>
                </ul>
              </li>
              <li>
                East and South-East Asia
                <ul>
                  <li><a href="https://unctad.org/press-material/asias-growth-decelerates-significantly-amid-deteriorating-global-conditions">English</a></li>
                </ul>
              </li>
              <li>
                South and West Asia
                <ul>
                  <li><a href="https://unctad.org/press-material/global-energy-market-volatility-leading-slower-and-divergent-growth-prospects-across">English</a></li>
                </ul>
              </li>
              <li>
                Latin America and the Caribbean
                <ul>
                  <li><a href="https://unctad.org/press-material/external-constraints-sluggish-growth-cast-long-economic-shadow-over-latin-america">English</a></li>
                  {/* <li>Español to come</li> */}
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
