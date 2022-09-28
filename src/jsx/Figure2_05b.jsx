import React, { useState, useEffect } from 'react';
import '../styles/styles.less';

// Load helpers.
import CSVtoJSON from './helpers/CSVtoJSON.js';

import BarChart from './helpers/BarChart.jsx';

function Figure2_05b() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => data.map(el => ({
    data: Object.values(el).map(val => parseFloat(val)).filter(val => !Number.isNaN(val)),
    labels: Object.keys(el).filter(val => val !== 'Name'),
    name: el.Name
  }));

  useEffect(() => {
    const data_file = (window.location.href.includes('unctad.org')) ? '/sites/default/files/data-file/2022-tdr_report_figure_2_05b.csv' : './assets/data/2022-tdr_report_figure_2_05b.csv';
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
      {dataFigure && <BarChart idx="2_05b" data={dataFigure} data_decimals={1} source="" sub_title="" title="" xlabel="" ymax={90} ymin={0} />}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure2_05b;
