import React, { useState, useEffect } from 'react';

// Load helpers.
import CSVtoJSON from '../helpers/CSVtoJSON.js';
import ChartLine from '../charts/ChartLine.jsx';

function Figure2_05a() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => data.map(el => ({
    data: Object.values(el).map(val => parseFloat(val)).filter(val => !Number.isNaN(val)),
    labels: Object.keys(el).filter(val => val !== 'Name'),
    name: el.Name
  }));

  useEffect(() => {
    const data_file = (window.location.href.includes('unctad.org')) ? '/sites/default/files/data-file/2022-tdr_report_figure_2_05a.csv' : './assets/data/2022-tdr_report_figure_2_05a.csv';
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
        idx="2_05a"
        data={dataFigure}
        data_decimals={0}
        labels={false}
        note="LMICs=Lower middle-income countries, LICs=Low-income countries, MICs=Middle-income countries, UMICs=Upper middle-income countries"
        show_only_first_and_last_labels
        source="UNCTAD secretariat calculations based on World Bank data."
        subtitle="Income group averages, Percentage, 2010–2021"
        tick_interval={1}
        title="Servicing costs on public and publicly guaranteed external debt to government revenues, developing countries and groups"
        xlabel="Year"
      />
      )}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure2_05a;
