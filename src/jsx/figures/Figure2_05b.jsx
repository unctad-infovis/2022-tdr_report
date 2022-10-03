import React, { useState, useEffect } from 'react';

// Load helpers.
import CSVtoJSON from '../helpers/CSVtoJSON.js';
import ChartBar from '../charts/ChartBar.jsx';

function Figure2_05b() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => data.map(el => ({
    data: Object.values(el).map(val => parseFloat(val)).filter(val => !Number.isNaN(val)),
    labels: Object.keys(el).filter(val => val !== 'Name'),
    name: el.Name
  }));

  useEffect(() => {
    const data_file = `${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-tdr_report/' : './'}assets/data/2022-tdr_report_figure_2_05b.csv`;
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
      <ChartBar
        data={dataFigure}
        data_decimals={1}
        idx="2_05b"
        source="UNCTAD secretariat calculations based on World Bank data."
        subtitle="Top 20 countries in 2020, Percentage, 2010–2021"
        title="Servicing costs on public and publicly guaranteed external debt to government revenues, developing countries and groups"
        ylabel="Percentage"
        ymax={100}
        ymin={0}
      />
      )}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure2_05b;
