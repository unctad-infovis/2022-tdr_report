import React, { /* useState,  useEffect, useRef */useCallback } from 'react';

function Footer() {
  const analytics = window.gtag || undefined;
  const track = useCallback((label_event = false, value_event = false) => {
    if (typeof analytics !== 'undefined' && label_event !== false && value_event !== false) {
      analytics('event', 'project_interaction', {
        label: label_event,
        project_name: '2022-tdr_report',
        transport_type: 'beacon',
        value: value_event
      });
    }
  }, [analytics]);
  return (
    <div className="footer_container">
      <h2>What do you want to do next?</h2>
      <div className="download_button anchor_downloads"><a href="/webflyer/trade-and-development-report-2022">Download the report</a></div>
      <div className="footer_elements">
        <div className="footer_element footer_element_1">
          <div className="footer_content anchor_video">
            <h3>Watch the video</h3>
            <div className="iframe_container youtube_iframe">
              <iframe src="https://www.youtube.com/embed/QqDYv5-bDhU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <ul>
              <li>
                <a href="https://youtu.be/AHIS_6dyADQ" target="_blank" rel="noreferrer">Français</a>
                {', '}
                <a href="https://youtu.be/r-91aKra8J8" target="_blank" rel="noreferrer">Español</a>
                {', '}
                <a href="https://youtu.be/5EyVPdGdJpk" target="_blank" rel="noreferrer">العربية</a>
                {', '}
                <a href="https://youtu.be/Te2RMNI0rkA" target="_blank" rel="noreferrer">简体中文</a>
                {', '}
                <a href="https://youtu.be/nz10v0QqXRU" target="_blank" rel="noreferrer">Русский</a>
                {', '}
                <a href="https://youtu.be/UsIx8WQFsd4" target="_blank" rel="noreferrer">Português</a>
              </li>
            </ul>
          </div>
          <div className="footer_content anchor_podcasts">
            <h3>Podcasts</h3>
            <p>Listen to the Weekly Tradecast episodes that explore some of the main issues in the report</p>
            <div className="iframe_container">
              <iframe title="The Weekly Tradecast by UNCTAD" height="150" width="100%" style={{ border: 'none', minWidth: 'min(100%, 430px)' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=k45e8-12db012-pb&btn-skin=009EDB&download=1&font-color=000000&fonts=Verdana&from=pb6admin&logo_link=none&rtl=0&share=1&size=240&skin=ffffff" allowFullScreen />
              <span className="text"><a href="/podcast/changing-course-shift-policies-needed-avert-global-recession">Changing course</a></span>
            </div>
            <ul className="podcasts_container">
              <li>
                <span className="icon" />
                <span className="text"><a href="/podcast/ghosts-recessions-past-history-repeating-itself">Ghosts of recessions past</a></span>
              </li>
              <li>
                <span className="icon" />
                <span className="text"><a href="/podcast/drowning-debt-how-developing-countries-can-survive-crisis">Drowning in debt</a></span>
              </li>
              <li>
                <span className="icon" />
                <span className="text"><a href="/podcast/war-and-price-cost-rising-inflation">The cost of rising inflation</a></span>
              </li>
              <li>
                <span className="icon" />
                <span className="text"><a href="/podcast/multinational-manoeuvres-how-rule-shopping-big-companies-dilutes-development">Multinational manoeuvres</a></span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_element footer_element_2">
          <div className="footer_content anchor_press">
            <h3>Press material</h3>
            <ul>
              <li>
                <h4>Press conference</h4>
                <div className="iframe_container youtube_iframe">
                  <iframe src="https://www.youtube.com/embed/dy9xtqxhJa0" title="TDR 2022 Press conference" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
                <ul>
                  <li><a href="https://vimeo.com/756503117" target="_blank" rel="noreferrer">Download the press conference</a></li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <h4>Download the report video</h4>
                <ul>
                  <li>
                    <a href="https://vimeo.com/755965931" target="_blank" rel="noreferrer">English</a>
                    {', '}
                    <a href="https://vimeo.com/756145582" target="_blank" rel="noreferrer">Français</a>
                    {', '}
                    <a href="https://vimeo.com/756145622" target="_blank" rel="noreferrer">Español</a>
                    {', '}
                    <a href="https://vimeo.com/756186752" target="_blank" rel="noreferrer">العربية</a>
                    {', '}
                    <a href="https://vimeo.com/756145534" target="_blank" rel="noreferrer">简体中文</a>
                    {', '}
                    <a href="https://vimeo.com/756185578" target="_blank" rel="noreferrer">Русский</a>
                    {', '}
                    <a href="https://vimeo.com/756146237" target="_blank" rel="noreferrer">Português</a>
                  </li>
                </ul>
              </li>
              <li>
                <h4>Read the global press release</h4>
                <ul>
                  <li>
                    <a href="/press-material/unctad-warns-policy-induced-global-recession-inadequate-financial-support-leaves" onClick={(event) => track('Anchor', event.target.href)}>English</a>
                    {', '}
                    <a href="/fr/press-material/la-cnuced-met-en-garde-contre-une-recession-mondiale-induite-par-les-politiques" onClick={(event) => track('Anchor', event.target.href)}>Français</a>
                    {', '}
                    <a href="/es/press-material/la-unctad-advierte-de-una-ralentizacion-mundial-provocada-por-los-ajustes-de" onClick={(event) => track('Anchor', event.target.href)}>Español</a>
                    {', '}
                    <a href="/system/files/press-material/PR22014.Rev_.1_ar_TDR22_Final.pdf" onClick={(event) => track('Anchor', event.target.href)}>العربية</a>
                    {', '}
                    <a href="/system/files/press-material/PR22014_Rev.1_ch_TDR22.pdf" onClick={(event) => track('Anchor', event.target.href)}>简体中文</a>
                    {', '}
                    <a href="/system/files/press-material/PR22014.Rev_.1_ru_TDR22_Final.pdf" onClick={(event) => track('Anchor', event.target.href)}>Русский</a>
                    {', '}
                    <a href="/system/files/press-material/PR22014.Rev_.1_pt_TDR22_Final.pdf" onClick={(event) => track('Anchor', event.target.href)}>Português</a>
                  </li>
                </ul>
              </li>
              <h4>Read the regional press releases</h4>
              <li>
                Africa
                <ul>
                  <li>
                    <a href="/press-material/africas-economic-growth-decelerates-sharply" onClick={(event) => track('Anchor', event.target.href)}>English</a>
                    {', '}
                    <a href="/fr/press-material/la-croissance-economique-de-lafrique-ralentit-fortement" onClick={(event) => track('Anchor', event.target.href)}>Français</a>
                  </li>
                </ul>
              </li>
              <li>
                Latin America and the Caribbean
                <ul>
                  <li>
                    <a href="/press-material/external-constraints-sluggish-growth-cast-long-economic-shadow-over-latin-america" onClick={(event) => track('Anchor', event.target.href)}>English</a>
                    {', '}
                    <a href="/es/press-material/las-restricciones-externas-y-el-debil-crecimiento-ensombrecen-el-panorama-economico" onClick={(event) => track('Anchor', event.target.href)}>Español</a>
                  </li>
                </ul>
              </li>
              <li>
                East and South-East Asia
                <ul>
                  <li>
                    <a href="/press-material/asias-growth-decelerates-significantly-amid-deteriorating-global-conditions" onClick={(event) => track('Anchor', event.target.href)}>English</a>
                    {', '}
                    <a href="/system/files/press-material/PR22016.Rev_.1_ch_TDR22_East_SouthEast_Asia_Final.pdf" onClick={(event) => track('Anchor', event.target.href)}>简体中文</a>
                  </li>
                </ul>
              </li>
              <li>
                South and West Asia
                <ul>
                  <li>
                    <a href="/press-material/global-energy-market-volatility-leading-slower-and-divergent-growth-prospects-across" onClick={(event) => track('Anchor', event.target.href)}>English</a>
                    {', '}
                    <a href="/system/files/press-material/PR22017_ar_TDR22_South_West_Asia_final.pdf" onClick={(event) => track('Anchor', event.target.href)}>العربية</a>
                  </li>
                </ul>
              </li>
            </ul>
            <h4><a href="/webflyer/trade-and-development-report-2022">Download the report</a></h4>
            <div><a href="/webflyer/trade-and-development-report-2022"><img src={`${window.location.href.includes('unctad') ? 'https://storage.unctad.org/2022-tdr_report/' : './'}assets/img/2022-tdr_report_cover-min.png`} alt="TDR 2022 Cover" /></a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
