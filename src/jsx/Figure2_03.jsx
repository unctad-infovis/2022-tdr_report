import React, { useState, useEffect } from 'react';
import '../styles/styles.less';

// Load helpers.
import CSVtoJSON from './helpers/CSVtoJSON.js';

import BarChart from './helpers/BarChart.jsx';

function Figure2_03() {
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
      <BarChart
        idx="2_03"
        data={dataFigure}
        data_decimals={1}
        source="UNCTAD secretariat calculations based on Refinitiv."
        note="Estimated change in per cent of the nominal exchange rate against the United States dollar between 1 January 2022 and 8 July 2022."
        subtitle="Percentage"
        title="Nominal exchange rate depreciations against the United States dollar, selected developing countries, January–July 2022"
        ymax={90}
        ymin={0}
        ylabel="Percentage"
      />
      )}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure2_03;
