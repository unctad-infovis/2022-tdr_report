import React, { useState, useEffect, useRef } from 'react';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

import '../styles/styles.less';

import Video from './Video.jsx';
import PageNavigation from './PageNavigation.jsx';
import Quote from './Quote.jsx';
import ProgressIndicator from './ProgressIndicator.jsx';
import PhotoHeadline from './PhotoHeadline.jsx';
import Recommendations from './Recommendations.jsx';
import Footer from './Footer.jsx';
import Figure104 from './figures/Figure1_04.jsx';
import Figure109 from './figures/Figure1_09.jsx';
import Figure110 from './figures/Figure1_10.jsx';
import Figure203 from './figures/Figure2_03.jsx';
import Figure205a from './figures/Figure2_05a.jsx';
import Figure205b from './figures/Figure2_05b.jsx';
import Figure209a from './figures/Figure2_09a.jsx';
import Figure209b from './figures/Figure2_09b.jsx';
import Figure315e from './figures/Figure3_15e.jsx';

const analytics = window.gtag || undefined;

function App() {
  const appRef = useRef();
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();

  const [section1Seen, setSection1Seen] = useState(false);
  const [section2Seen, setSection2Seen] = useState(false);
  const [section3Seen, setSection3Seen] = useState(false);
  const [section4Seen, setSection4Seen] = useState(false);
  const [section5Seen, setSection5Seen] = useState(false);

  const [section1Progress, setSection1Progress] = useState(0);
  const [section2Progress, setSection2Progress] = useState(0);
  const [section3Progress, setSection3Progress] = useState(0);
  const [section4Progress, setSection4Progress] = useState(0);
  const [section5Progress, setSection5Progress] = useState(0);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const windowHeight = 0;
    setSection1Progress((offset > section1.current.offsetTop - windowHeight) ? (Math.min(((offset - (section1.current.offsetTop - windowHeight)) / section1.current.offsetHeight) * 100, 100)) : 0);
    setSection2Progress((offset > section2.current.offsetTop - windowHeight) ? (Math.min(((offset - (section2.current.offsetTop - windowHeight)) / section2.current.offsetHeight) * 100, 100)) : 0);
    setSection3Progress((offset > section3.current.offsetTop - windowHeight) ? (Math.min(((offset - (section3.current.offsetTop - windowHeight)) / section3.current.offsetHeight) * 100, 100)) : 0);
    setSection4Progress((offset > section4.current.offsetTop - windowHeight) ? (Math.min(((offset - (section4.current.offsetTop - windowHeight)) / section4.current.offsetHeight) * 100, 100)) : 0);
    setSection5Progress((offset > section5.current.offsetTop - windowHeight) ? (Math.min(((offset - (section4.current.offsetTop - windowHeight)) / section5.current.offsetHeight) * 100, 100)) : 0);
  }, [offset]);

  useEffect(() => {
    if (section1Progress === 100 && section1Seen === false) {
      setSection1Seen(true);
      if (typeof analytics !== 'undefined') {
        analytics('event', 'Scroll', {
          event_category: '2022-tdr_report',
          event_label: 'Section 1',
          transport_type: 'beacon'
        });
      }
    }
  }, [section1Progress, section1Seen]);

  useEffect(() => {
    if (section2Progress === 100 && section2Seen === false) {
      setSection2Seen(true);
      if (typeof analytics !== 'undefined') {
        analytics('event', 'Scroll', {
          event_category: '2022-tdr_report',
          event_label: 'Section 2',
          transport_type: 'beacon'
        });
      }
    }
  }, [section2Progress, section2Seen]);

  useEffect(() => {
    if (section3Progress === 100 && section3Seen === false) {
      setSection3Seen(true);
      if (typeof analytics !== 'undefined') {
        analytics('event', 'Scroll', {
          event_category: '2022-tdr_report',
          event_label: 'Section 3',
          transport_type: 'beacon'
        });
      }
    }
  }, [section3Progress, section3Seen]);

  useEffect(() => {
    if (section4Progress === 100 && section4Seen === false) {
      setSection4Seen(true);
      if (typeof analytics !== 'undefined') {
        analytics('event', 'Scroll', {
          event_category: '2022-tdr_report',
          event_label: 'Section 4',
          transport_type: 'beacon'
        });
      }
    }
  }, [section4Progress, section4Seen]);

  useEffect(() => {
    if (section5Progress === 100 && section5Seen === false) {
      setSection5Seen(true);
      if (typeof analytics !== 'undefined') {
        analytics('event', 'Scroll', {
          event_category: '2022-tdr_report',
          event_label: 'Section 5',
          transport_type: 'beacon'
        });
      }
    }
  }, [section5Progress, section5Seen]);

  return (
    <div className="app" ref={appRef}>
      <Video />
      <PageNavigation appRef={appRef} />
      <div className="two_column_layout">
        <div className="left_column">
          <div className="text_container">
            <IsVisible once>
              {(isVisible) => (
                <p className="ingress">
                  The world is headed towards a global recession and prolonged stagnation
                  {' '}
                  <span className={`highlight ${(isVisible) ? 'visible' : ''}`}>unless we quickly change the current policy course</span>
                  {' '}
                  of monetary and fiscal tightening in advanced economies.
                </p>
              )}
            </IsVisible>
            <p className="ingress">
              Supply-side shocks, waning consumer and investor confidence and the war in Ukraine have provoked a global slowdown and triggered inflationary pressures.
            </p>
            <IsVisible once>
              {(isVisible) => (
                <p className="ingress">
                  All regions will be affected, but
                  {' '}
                  <span className={`highlight ${(isVisible) ? 'visible' : ''}`}>alarm bells are ringing most for developing countries</span>
                  , many of which are edging closer to debt default. Climate stress is intensifying, with mounting loss and damage in vulnerable countries who lack the fiscal space to deal with disasters, let alone invest in their own long-term development.
                </p>
              )}
            </IsVisible>
          </div>
        </div>
        <div className="right_column">
          <Quote />
        </div>
      </div>
      <div className="section_wrapper">
        <ProgressIndicator appRef={appRef} section1Progress={section1Progress} section2Progress={section2Progress} section3Progress={section3Progress} section4Progress={section4Progress} section5Progress={section5Progress} />
        <div ref={section1} className="section_1_container">
          <PhotoHeadline img="2022-tdr_report-photo01-min.jpg" max_width={560} text_upper="Global slowdown will affect all regions" text_lower="but impact developing countries most" />
          <div className="two_column_layout">
            <div className="left_column">
              <div className="text_container">
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      UNCTAD projects that
                      {' '}
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`}>world economic growth will slow to 2.5% in 2022 and drop to 2.2% in 2023.</span>
                      {' '}
                      The global slowdown would leave real GDP still below its pre-pandemic trend, costing the world more than $17 trillion – close to 20% of the world’s income.
                    </p>
                  )}
                </IsVisible>
                <p>
                  Despite this, leading central banks are raising interest rates sharply, threatening to cut off growth altogether and making life much harder for heavily indebted firms, households and governments.
                </p>
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      The global slowdown will affect all economies. But
                      {' '}
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`}>developing countries are exposed most to the cascade of debt, health and climate crises.</span>
                      {' '}
                      Middle-income countries in Latin America and low-income countries in Africa could suffer some of the sharpest slowdowns this year.
                    </p>
                  )}
                </IsVisible>
                <p>
                  The average growth rate for developing economies is projected to drop below 3% – a pace that is insufficient for sustainable development and will further squeeze public and private finances and damage employment prospects.
                </p>
              </div>
              <Figure110 />
            </div>
            <div className="right_column">
              <Figure109 />
              <Recommendations headline="UNCTAD calls for" recommendation_list={['Central banks in developed economies to revert course and avoid the temptation to try to bring down prices by relying on ever higher interest rates.', 'Advanced economies to avoid austerity measures.', 'International organizations to reform the multilateral architecture to give developing countries greater fiscal space and fairer say in decision-making processes.']} />
            </div>
          </div>
        </div>
        <div ref={section2} className="section_2_container">
          <PhotoHeadline img="2022-tdr_report-photo02-min.jpg" text_upper="A widespread" text_lower="debt crisis in developing countries is a real risk" />
          <div className="two_column_layout">
            <div className="left_column">
              <div className="text_container">
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      With 60% of low-income countries and 30% of emerging market economies in or near debt distress, the
                      {' '}
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`}>possibility of a global debt crisis is high.</span>
                    </p>
                  )}
                </IsVisible>
                <p>
                  Countries that were showing signs of debt distress before the pandemic – including Sri Lanka, Suriname and Zambia – are being hit especially hard by the global slowdown. And climate shocks are heightening the risk of economic instability in indebted developing countries.
                </p>
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`}>The situation in developing countries is worse than recognized</span>
                      {' '}
                      by the Group of 20 major economies (G20) and other international financial fora. Developing countries have already spent an estimated $379 billion of reserves to defend their currencies this year, almost double the amount of new Special Drawing Rights recently allocated to them by the International Monetary Fund (IMF).
                    </p>
                  )}
                </IsVisible>
              </div>
              <Figure205b />
            </div>
            <div className="right_column">
              <Figure205a />
              <Recommendations headline="UNCTAD calls for" recommendation_list={['International financial institutions to urgently provide increased liquidity and extend real debt relief for developing countries.', 'The IMF to allow for a larger, more permanent and fairer use of Special Drawing Rights, an international reserve asset created to supplement the official reserves of its member countries.', 'Countries to prioritize a multilateral legal framework for handling debt restructuring, including all official and private creditors.']} />
            </div>
          </div>
        </div>
        <div ref={section3} className="section_3_container">
          <PhotoHeadline img="2022-tdr_report-photo03-min.jpg" text_upper="Interest rate hikes" text_lower="are hitting the poorest hardest" />
          <div className="two_column_layout">
            <div className="left_column">
              <div className="text_container">
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      Interest rate hikes by advanced economies
                      {' '}
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`}>are hitting the most vulnerable hardest.</span>
                      {' '}
                      Some 90 developing countries have seen their currencies weaken against the dollar this year – over a third of them by more than 10%.
                    </p>
                  )}
                </IsVisible>
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      The prices of necessities like food and energy have soared in the wake of the war in Ukraine.
                      {' '}
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`}>And a stronger dollar makes the situation worse</span>
                      , raising the price of imports in developing countries. The consequences are devastating for the poor across the globe, especially in a time of stagnant wages for most workers.
                    </p>
                  )}
                </IsVisible>
                <p>
                  This year’s interest rate hikes in the United States, for example, could cut $360 billion of future income for developing countries (excluding China).
                </p>
              </div>
              <Figure104 />
            </div>
            <div className="right_column">
              <Figure203 />
              <Recommendations headline="UNCTAD calls for" recommendation_list={['Governments to increase public spending and use strategic price controls to directly target energy, food and other vital areas.', 'Public and private investors to channel more money into renewable energy research and development.', 'Stronger global support for the UN-led Black Sea Grain Initiative set up to reintroduce vital food and fertilizer exports from Ukraine to the rest of the world.']} />
            </div>
          </div>
        </div>
        <div ref={section4} className="section_4_container">
          <PhotoHeadline img="2022-tdr_report-photo04-min.jpg" text_upper="More must be done to" text_lower="calm commodity markets and address price speculation" />
          <div className="two_column_layout">
            <div className="left_column">
              <div className="text_container">
                <p>
                  Prices of commodities – particularly food and energy – climbed for much of the last two years, posing significant challenges for households everywhere. Added upward pressure on fertilizer prices means the damage could be lasting since it’s the top input cost for many small farmers around the world.
                </p>
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      Although the war in Ukraine has contributed to this situation,
                      {' '}
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`}>commodity markets have been in a turbulent state for a decade.</span>
                    </p>
                  )}
                </IsVisible>
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      The Black Sea Grain Initiative led by the United Nations has had a significant impact in lowering global food prices. However,
                      {' '}
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`}>insufficient attention has been paid to the role of speculators</span>
                      {' '}
                      and betting frenzies in futures contracts, commodity swaps and exchange traded funds.
                    </p>
                  )}
                </IsVisible>
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      Also, large multinational corporations with considerable market power appear to have
                      {' '}
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`}>taken undue advantage of the current context</span>
                      {' '}
                      to raise markups to boost profits on the backs of some of the world’s poorest people.
                    </p>
                  )}
                </IsVisible>
              </div>
              <Figure209b />
            </div>
            <div className="right_column">
              <Figure209a />
              <Recommendations headline="UNCTAD calls for" recommendation_list={['Governments to include tighter commodity market regulation as part of their policy mix to curb price spikes that are hitting consumers in the developing world hard.', 'Governments to deploy a pragmatic strategy, including price controls, antitrust measures and windfall taxes on excessive corporate profits and to use these funds to support the most vulnerable.']} />
            </div>
          </div>
        </div>
        <div ref={section5} className="section_5_container">
          <PhotoHeadline img="2022-tdr_report-photo05-min.jpg" text_upper="South-South cooperation can make a difference" text_lower=" but is not a substitute for multilateralism" />
          <div className="two_column_layout">
            <div className="left_column">
              <div className="text_container">
                <p>As economic pressures build, South-South cooperation could help developing countries pursue climate mitigation and sustainable development.</p>
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      UNCTAD simulated a South-led low-carbon transition based on increased coordination and cooperation between developing economies on industrial policy, investment, finance and agriculture. Under this scenario, UNCTAD’s Global Policy Model gave the following results:
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`}>highlight</span>
                    </p>
                  )}
                </IsVisible>
                <ul>
                  <li>Energy efficiency gains that are compatible with faster growth in the global South and long-standing development goals. </li>
                  <li>An additional 300 million jobs worldwide could be created, with gains across all developing regions and an improved share for wages in total income. </li>
                  <li>Growth would also pick up in developed economies, above that of the last decade, allowing for increased investment in energy transition and improved energy efficiency.  </li>
                  <li>A decline in annual CO2 emissions to about 30 billion tons by the end of the decade, enough to escape the IPCC catastrophic global warming scenario of up to 4.5 degrees Celsius above preindustrial levels but not enough to hit the 1.5 degree target. </li>
                </ul>
                <IsVisible once>
                  {(isVisible) => (
                    <p>
                      However, scaling up this strategy requires an effective multilateral system that gives developing countries the necessary policy space and financial support.
                      <span className={`highlight ${(isVisible) ? 'visible' : ''}`}>highlight</span>
                    </p>
                  )}
                </IsVisible>
              </div>
            </div>
            <div className="right_column">
              <Figure315e />
            </div>
          </div>
          <Recommendations headline="UNCTAD calls for" recommendation_list={['Coordinated industrial policies based on intellectual property and technology available within the global South.', 'Cooperation on finance and technology to boost South-South trade and strengthen regional financial preparedness to protect developing economies from global economic fluctuations.', 'Coordination of agricultural policies among developing economies, to ensure agriculture provides employment and food security for people living in the global South, as well as resources for low-carbon industrialization.', 'Industrialization based on minimal use of fossil fuel machinery and an emphasis on local production to meet basic needs. ']} />
        </div>
      </div>
      <Footer />
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
