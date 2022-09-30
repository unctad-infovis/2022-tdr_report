import React, { /* useState, */ /* useEffect, useRef */ } from 'react';
import '../styles/styles.less';

import Video from './Video.jsx';
import PageNavigation from './PageNavigation.jsx';
import Quote from './Quote.jsx';
import PhotoHeadline from './PhotoHeadline.jsx';
import Recommendations from './Recommendations.jsx';
import Figure104 from './Figure1_04.jsx';
import Figure108 from './Figure1_08.jsx';
import Figure109 from './Figure1_09.jsx';
import Figure110 from './Figure1_10.jsx';
import Figure205a from './Figure2_05a.jsx';
import Figure205b from './Figure2_05b.jsx';
import Figure209a from './Figure2_09a.jsx';
import Figure209b from './Figure2_09b.jsx';

function App() {
  return (
    <div className="app">
      <Video />
      <PageNavigation />
      <div className="two_column_layout">
        <div className="left_column">
          <p className="ingress">The world is headed towards a global recession and prolonged stagnation unless we quickly change the current policy course of monetary and fiscal tightening in advanced economies.</p>
          <p className="ingress">Supply-side shocks, waning consumer and investor confidence and the war in Ukraine have provoked a global slowdown and triggered inflationary pressures.</p>
          <p className="ingress">All regions will be affected, but alarm bells are ringing most for developing countries, many of which are edging closer to debt default. Climate stress is intensifying, with mounting loss and damage in vulnerable countries who lack the fiscal space to deal with disasters, let alone invest in their own long-term development.</p>
        </div>
        <div className="right_column">
          <Quote />
        </div>
      </div>
      <PhotoHeadline img="AdobeStock_475265994.jpeg" text_upper="Global slowdown will affect all regions" text_lower="but impact developing countries most" />
      <div className="two_column_layout">
        <div className="left_column">
          <p>UNCTAD projects that world economic growth will slow to 2.5% in 2022 and drop to 2.2% in 2023. The global slowdown would leave real GDP still below its pre-pandemic trend, costing the world more than $17 trillion – close to 20% of the world’s income.</p>
          <p>Despite this, leading central banks are raising interest rates sharply, threatening to cut off growth altogether and making life much harder for heavily indebted firms, households and governments.</p>
          <p>The global slowdown will affect all economies. But developing countries are exposed most to the cascade of debt, health and climate crises. Middle-income countries in Latin America and low-income countries in Africa could suffer some of the sharpest slowdowns this year.</p>
          <p>The average growth rate for developing economies is projected to drop below 3% – a pace that is insufficient for sustainable development and will further squeeze public and private finances and damage employment prospects.</p>
          <Recommendations headline="UNCTAD calls for" recommendation_list={['Central banks in developed economies to revert course and avoid the temptation to try to bring down prices by relying on ever higher interest rates.', 'Advanced economies to avoid austerity measures.', 'International organizations to reform the multilateral architecture to give developing countries greater fiscal space and fairer say in decision-making processes.']} />
        </div>
        <div className="right_column">
          <Figure108 />
          <Figure104 />
        </div>
      </div>
      <PhotoHeadline img="AdobeStock_73264210.jpeg" text_upper="A widespread" text_lower="debt crisis in developing countries is a real risk" />
      <div className="two_column_layout">
        <div className="left_column">
          <p>With 60% of low-income countries and 30% of emerging market economies in or near debt distress, the possibility of a global debt crisis is high.</p>
          <p>Countries that were showing signs of debt distress before the pandemic – including Sri Lanka, Suriname and Zambia – are being hit especially hard by the global slowdown. And climate shocks are heightening the risk of economic instability in indebted developing countries.</p>
          <p>The situation in developing countries is worse than recognized by the Group of 20 major economies (G20) and other international financial fora. Developing countries have already spent an estimated $379 billion of reserves to defend their currencies this year, almost double the amount of new Special Drawing Rights recently allocated to them by the International Monetary Fund (IMF).</p>
          <Recommendations headline="UNCTAD calls for" recommendation_list={['International financial institutions to urgently provide increased liquidity and extend real debt relief for developing countries.', 'The IMF to allow for a larger, more permanent and fairer use of Special Drawing Rights, an international reserve asset created to supplement the official reserves of its member countries.', 'Countries to prioritize a multilateral legal framework for handling debt restructuring, including all official and private creditors.']} />
        </div>
        <div className="right_column">
          <Figure109 />
          <Figure110 />
        </div>
      </div>
      <PhotoHeadline img="AdobeStock_117380799.jpeg" text_upper="Interest rate hikes" text_lower="are hitting the poorest hardest" />
      <div className="two_column_layout">
        <div className="left_column">
          <p>Interest rate hikes by advanced economies are hitting the most vulnerable hardest. Some 90 developing countries have seen their currencies weaken against the dollar this year – over a third of them by more than 10%.</p>
          <p>The prices of necessities like food and energy have soared in the wake of the war in Ukraine. And a stronger dollar makes the situation worse, raising the price of imports in developing countries. The consequences are devastating for the poor across the globe, especially in a time of stagnant wages for most workers.</p>
          <p>This year’s interest rate hikes in the United States, for example, could cut $3.6 trillion of future income for developing countries (excluding China).</p>
          <Recommendations headline="UNCTAD calls for" recommendation_list={['Governments to increase public spending and use strategic price controls to directly target energy, food and other vital areas.', 'Public and private investors to channel more money into renewable energy research and development.', 'Stronger global support for the UN-led Black Sea Grain Initiative set up to reintroduce vital food and fertilizer exports from Ukraine to the rest of the world.']} />
        </div>
        <div className="right_column">
          <Figure205a />
          <Figure205b />
        </div>
      </div>
      <PhotoHeadline img="AdobeStock_111833592.jpeg" text_upper="More must be done to" text_lower="calm commodity markets and address price speculation" />
      <div className="two_column_layout">
        <div className="left_column">
          <p>Prices of commodities – particularly food and energy – climbed for much of the last two years, posing significant challenges for households everywhere. Added upward pressure on fertilizer prices means the damage could be lasting since it’s the top input cost for many small farmers around the world.</p>
          <p>Although the war in Ukraine has contributed to this situation, commodity markets have been in a turbulent state for a decade.</p>
          <p>The Black Sea Grain Initiative led by the United Nations has had a significant impact in lowering global food prices. However, insufficient attention has been paid to the role of speculators and betting frenzies in futures contracts, commodity swaps and exchange traded funds.</p>
          <p>Also, large multinational corporations with considerable market power appear to have taken undue advantage of the current context to raise markups to boost profits on the backs of some of the world’s poorest people.</p>
          <Recommendations headline="UNCTAD urges" recommendation_list={['Governments to include tighter commodity market regulation as part of their policy mix to curb price spikes that are hitting consumers in the developing world hard.', 'Governments to deploy a pragmatic strategy, including price controls, anitrust measures and windfall taxes on excessive corporate profits and to use these funds to support the most vulnerable.']} />
        </div>
        <div className="right_column">
          <Figure209a />
          <Figure209b />
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
