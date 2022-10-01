import React, { useState, useEffect } from 'react';
import '../../styles/styles.less';

// Load helpers.
import CSVtoJSON from '../helpers/CSVtoJSON.js';

import ChartLine from '../charts/ChartLine.jsx';

function Figure1_09() {
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
    const data_file = (window.location.href.includes('unctad.org')) ? '/sites/default/files/data-file/2022-tdr_report_figure_1_09.csv' : './assets/data/2022-tdr_report_figure_1_09.csv';
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
    <div>
      {dataFigure && (
      <ChartLine
        allow_decimals={false}
        data={dataFigure}
        data_decimals={0}
        idx="1_09"
        source="UNCTAD secretariat calculations based on the United Nations Global Policy Model."
        subtitle="Index numbers, 2016=100"
        title="COVID-19 recovery compared to pre-COVID-19 trend, 2016–2023"
        xlabel="Year"
      />
      )}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure1_09;
