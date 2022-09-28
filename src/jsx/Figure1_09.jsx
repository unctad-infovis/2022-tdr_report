import React, { useState, useEffect } from 'react';
import '../styles/styles.less';

// Load helpers.
import CSVtoJSON from './helpers/CSVtoJSON.js';

import LineChart from './helpers/LineChart.jsx';

// const appID = '#app-root-2022-tdr_report';

function Figure1_9() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => data.map(el => ({
    data: Object.values(el).map(val => parseFloat(val)).filter(val => !Number.isNaN(val)),
    labels: Object.keys(el).filter(val => val !== 'Name'),
    name: el.Name,
    zoneAxis: 'x',
    zones: [{
      value: 5
    }, {
      dashStyle: 'shortdot'
    }]
  }));

  useEffect(() => {
    const data_file = (window.location.href.includes('unctad.org')) ? '/sites/default/files/data-file/2022-tdr_report_figure_1_9.csv' : './assets/data/2022-tdr_report_figure_1_09.csv';
    try {
      fetch(data_file)
        .then(response => response.text())
        .then(body => setDataFigure(cleanData(CSVtoJSON(body))));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="app">
      {dataFigure && <LineChart idx="1_9" data={dataFigure} data_decimals={0} source="UNCTAD secretariat calculations based on the United Nations Global Policy Model" sub_title="2016=100" title="Covid recovery to pre-covid trend" xlabel="Year" /> }
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure1_9;
