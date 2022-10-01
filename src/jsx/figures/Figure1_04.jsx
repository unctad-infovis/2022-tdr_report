import React, { useState, useEffect } from 'react';
import '../../styles/styles.less';

// Load helpers.
import CSVtoJSON from '../helpers/CSVtoJSON.js';

import ChartLine from '../charts/ChartLine.jsx';

function Figure1_04() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => data.map((el) => ({
    data: Object.entries(el).map((val, j) => ([j, parseFloat(val[1])])).filter(val => !Number.isNaN(val[1])),
    labels: Object.keys(el).filter(val => val !== 'Name'),
    name: el.Name/* ,
    regression: true,
    regressionSettings: {
      color: (i === 1) ? '#72bf44' : '#0077b8',
      dashStyle: 'longdash',
      hideInLegend: true,
      lineWidth: 1,
      regressionSeriesOptions: {
        marker: {
          enabled: false,
          states: {
            hover: {
              animation: false,
              enabled: false,
              radius: 8
            }
          },
        },
        states: {
          hover: {
            halo: {
              size: 0
            },
            enabled: true,
            lineWidth: 1,
          }
        }
      }
    } */
  }));

  useEffect(() => {
    const data_file = (window.location.href.includes('unctad.org')) ? '/sites/default/files/data-file/2022-tdr_report_figure_1_04.csv' : './assets/data/2022-tdr_report_figure_1_04.csv';
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
        data_decimals={1}
        idx="1_04"
        labels={false}
        note="Labour share is calculated as the ratio of the sum of compensation of employees and mixed income to GDP."
        show_only_first_and_last_labels
        source="United Nations Global Policy Model database."
        subtitle="Percentage of the GDP"
        tick_interval={1}
        title="Labour share, 1980–2022"
        xlabel="Year"
      />
      )}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure1_04;
