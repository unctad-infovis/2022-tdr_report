import React, { useState, useEffect } from 'react';
import '../styles/styles.less';

// Load helpers.
import CSVtoJSON from './helpers/CSVtoJSON.js';

import LineChart from './helpers/LineChart.jsx';

function Figure3_09() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => data.map((el) => ({
    data: Object.entries(el).map(val => ({ y: parseFloat(val[1]), name: val[0] })).filter(val => !Number.isNaN(val.y)),
    labels: Object.keys(el).filter(val => val !== 'Name'),
    name: el.Name
  }));

  useEffect(() => {
    const data_file = (window.location.href.includes('unctad.org')) ? '/sites/default/files/data-file/2022-tdr_report_figure_3_09.csv' : './assets/data/2022-tdr_report_figure_3_09.csv';
    try {
      fetch(data_file)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.text();
        })
        .then(body => setDataFigure(cleanData(CSVtoJSON(body))));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="app">
      {dataFigure && (
      <LineChart
        data={dataFigure}
        data_decimals={0}
        idx="3_09"
        labels={false}
        show_only_first_and_last_labels
        source="UNCTAD secretariat calculations based on United Stations Global Policy Model."
        subtitle="Percentage of GDP; PPP"
        tick_interval={1}
        title="Private investment"
        xlabel="Percentage"
      />
      )}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure3_09;
