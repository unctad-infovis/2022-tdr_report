import React, { useState, useEffect } from 'react';
import '../styles/styles.less';

// Load helpers.
import CSVtoJSON from './helpers/CSVtoJSON.js';

import LineChart from './helpers/LineChart.jsx';

function Figure1_08() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => data.map((el) => ({
    data: Object.entries(el).map(val => ({ y: parseFloat(val[1]), name: val[0] })).filter(val => !Number.isNaN(val.y)),
    labels: Object.keys(el).filter(val => val !== 'Name'),
    name: el.Name
  }));

  useEffect(() => {
    const data_file = (window.location.href.includes('unctad.org')) ? '/sites/default/files/data-file/2022-tdr_report_figure_1_08.csv' : './assets/data/2022-tdr_report_figure_1_08.csv';
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
      {dataFigure && <LineChart idx="1_08" data={dataFigure} data_decimals={1} source="UNCTAD secretariat calculations based on the United Nations Global Policy Model" sub_title="Percentage changes" title="Growth cycles before and after the GFC and the covid shock" xlabel="" />}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure1_08;
