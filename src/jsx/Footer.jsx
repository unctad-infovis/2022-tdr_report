import React, { /* useState,  useEffect, useRef */ } from 'react';

const analytics = window.gtag || undefined;

function Footer() {
  const track = (name) => {
    console.log(name);
    if (typeof analytics !== 'undefined') {
      analytics('event', 'Press material', {
        event_category: '2022-tdr_report',
        event_label: name,
        transport_type: 'beacon'
      });
    }
  };
  return (
    <>
      <div className="footer_container">
        <h2>What do you want to do next?</h2>
        <div className="download_button"><a href="https://unctad.org/webflyer/trade-and-development-report-2022">Download the report</a></div>
        <div className="footer_elements">
          <div className="footer_element footer_element_1">
            <div className="footer_content">
              <h3>Watch the video</h3>
              <div className="iframe_container youtube_iframe">
                <iframe src="" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              {/* <ul>
                <li>
                  <a href="#video">English</a>
                  {', '}
                  <a href="#video">Français</a>
                  {', '}
                  <a href="#video">Español</a>
                  {', '}
                  <a href="#video">العربية</a>
                  {', '}
                  <a href="#video">简体中文</a>
                  {', '}
                  <a href="#video">Русский</a>
                  {', '}
                  <a href="#video">Português</a>
                </li>
              </ul> */}
            </div>
            <div className="footer_content anchor_podcasts">
              <h3>Podcasts</h3>
              <p>Listen to the Weekly Tradecast episodes that explore some of the main issues in the report</p>
              <div className="iframe_container">
                <iframe title="The Weekly Tradecast by UNCTAD" height="150" width="100%" style={{ border: 'none', minWidth: 'min(100%, 430px)' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=k45e8-12db012-pb&btn-skin=009EDB&download=1&font-color=000000&fonts=Verdana&from=pb6admin&logo_link=none&rtl=0&share=1&size=240&skin=ffffff" allowFullScreen />
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
            </div>
          </div>
          <div className="footer_element footer_element_2">
            <div className="footer_content anchor_press">
              <h3>Press material</h3>
              {/* <div className="iframe_container youtube_iframe">
                <iframe src="https://www.youtube.com/embed/UGtKGX8B9hU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div> */}
              <ul>
                {/* <li>
                  Download the video
                  <ul>
                    <li>
                      <a href="#video">English</a>
                      {', '}
                      <a href="#video">Français</a>
                      {', '}
                      <a href="#video">Español</a>
                      {', '}
                      <a href="#video">العربية</a>
                      {', '}
                      <a href="#video">简体中文</a>
                      {', '}
                      <a href="#video">Русский</a>
                      {', '}
                      <a href="#video">Português</a>
                    </li>
                  </ul>
                </li> */}
                <li>
                  Read the global press release
                  <ul>
                    <li>
                      <a href="https://unctad.org/press-material/unctad-warns-policy-induced-global-recession-inadequate-financial-support-leaves" onClick={(event) => track(event.target.href)}>English</a>
                      {', '}
                      <a href="https://unctad.org/fr/press-material/la-cnuced-met-en-garde-contre-une-recession-mondiale-induite-par-les-politiques" onClick={(event) => track(event.target.href)}>Français</a>
                      {', '}
                      <a href="https://unctad.org/es/press-material/la-unctad-advierte-de-una-ralentizacion-mundial-provocada-por-los-ajustes-de" onClick={(event) => track(event.target.href)}>Español</a>
                      {', '}
                      <a href="https://unctad.org/system/files/press-material/PR22014_ar_TDR22_0.pdf" onClick={(event) => track(event.target.href)}>العربية</a>
                      {', '}
                      <a href="https://unctad.org/system/files/press-material/PR22014_ch_TDR22.pdf" onClick={(event) => track(event.target.href)}>简体中文</a>
                      {', '}
                      <a href="https://unctad.org/system/files/press-material/PR22014_ru_TDR22_0.pdf" onClick={(event) => track(event.target.href)}>Русский</a>
                      {', '}
                      <a href="https://unctad.org/system/files/press-material/PR22014_pt_TDR22.pdf" onClick={(event) => track(event.target.href)}>Português</a>
                    </li>
                  </ul>
                </li>
                <h4>Read the regional press releases</h4>
                <li>
                  Africa
                  <ul>
                    <li><a href="https://unctad.org/press-material/africas-economic-growth-decelerates-sharply" onClick={(event) => track(event.target.href)}>English</a></li>
                    <li><a href="https://unctad.org/fr/press-material/la-croissance-economique-de-lafrique-ralentit-fortement" onClick={(event) => track(event.target.href)}>Français</a></li>
                  </ul>
                </li>
                <li>
                  Latin America and the Caribbean
                  <ul>
                    <li><a href="https://unctad.org/press-material/external-constraints-sluggish-growth-cast-long-economic-shadow-over-latin-america" onClick={(event) => track(event.target.href)}>English</a></li>
                    {/* <li>Español to come</li> */}
                  </ul>
                </li>
                <li>
                  East and South-East Asia
                  <ul>
                    <li><a href="https://unctad.org/press-material/asias-growth-decelerates-significantly-amid-deteriorating-global-conditions" onClick={(event) => track(event.target.href)}>English</a></li>
                  </ul>
                </li>
                <li>
                  South and West Asia
                  <ul>
                    <li><a href="https://unctad.org/press-material/global-energy-market-volatility-leading-slower-and-divergent-growth-prospects-across" onClick={(event) => track(event.target.href)}>English</a></li>
                  </ul>
                </li>
              </ul>
              <h4><a href="https://unctad.org/webflyer/trade-and-development-report-2022">Download the report</a></h4>
              <div><a href="https://unctad.org/webflyer/trade-and-development-report-2022"><img src={`${window.location.href.includes('unctad') ? 'https://storage.unctad.org/2022-tdr_report/' : './'}assets/img/2022-tdr_report_cover-min.png`} alt="TDR 2022 Cover" /></a></div>
            </div>
          </div>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </>
  );
}

export default Footer;