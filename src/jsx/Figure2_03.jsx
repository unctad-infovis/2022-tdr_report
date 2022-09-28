import React, { useState, useEffect } from 'react';
import '../styles/styles.less';

// Load helpers.
import CSVtoJSON from './helpers/CSVtoJSON.js';

import BarChart from './helpers/BarChart.jsx';

// const appID = '#app-root-2022-tdr_report';

function Figure2_3() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => data.map(el => ({
    data: Object.values(el).map(val => parseFloat(val)).filter(val => !Number.isNaN(val)),
    labels: Object.keys(el).filter(val => val !== 'Name'),
    name: el.Name
  }));

  useEffect(() => {
    const data_file = (window.location.href.includes('unctad.org')) ? '/sites/default/files/data-file/2022-tdr_report_figure_2_03.csv' : './assets/data/2022-tdr_report_figure_2_03.csv';
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
      {dataFigure && <BarChart idx="2_3" data={dataFigure} data_decimals={1} source="UNCTAD secretariat calculations based on Refinitiv" note="Estimated change in per cent of the nominal exchange rate against the US dollar between 1 January 2022 and 8 July 2022. This includes data for common currency areas, such as the East Caribbean dollar and the West and Central Africa CFA franc." sub_title="January–July 2022, percentage" title="Expected output GDB in 2023" xlabel="" /> }
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure2_3;
