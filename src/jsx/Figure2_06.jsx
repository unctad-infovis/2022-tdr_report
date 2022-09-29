import React, { useState, useEffect } from 'react';
import '../styles/styles.less';

// Load helpers.
import CSVtoJSON from './helpers/CSVtoJSON.js';

import LineChart from './helpers/LineChart.jsx';

function Figure2_06() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => data.map(el => ({
    data: Object.values(el).map(val => parseFloat(val)).filter(val => !Number.isNaN(val)),
    labels: Object.keys(el).filter(val => val !== 'Name'),
    name: el.Name
  }));

  useEffect(() => {
    const data_file = (window.location.href.includes('unctad.org')) ? '/sites/default/files/data-file/2022-tdr_report_figure_2_06.csv' : './assets/data/2022-tdr_report_figure_2_06.csv';
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
        data_decimals={2}
        idx="2_06"
        labels={false}
        note="Price indices correspond to Dow Jones Commodity Index, except “Natural Gas (Europe)” which corresponds to Hamburg Institute of International Economics (HWWI) Natural Gas Europe price index and “Iron Ore” which corresponds to Credit Suisse Commodity Benchmark (CSCB) iron ore TR index."
        show_only_first_and_last_labels
        source="UNCTAD secretariat calculations based on Refinitiv data."
        sub_title="January 2015 – July 2022"
        tick_interval={13}
        title="Daily commodity price indices by commodity group and product"
      />
      )}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure2_06;
