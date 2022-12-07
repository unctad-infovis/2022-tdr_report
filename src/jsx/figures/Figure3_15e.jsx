import React, { useState, useEffect } from 'react';

// Load helpers.
import CSVtoJSON from '../helpers/CSVtoJSON.js';
import ChartLine from '../charts/ChartLine.jsx';

function Figure3_15e() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => data.map((el) => ({
    data: Object.entries(el).map(val => ({ y: parseFloat(val[1]), name: val[0] })).filter(val => !Number.isNaN(val.y)),
    labels: Object.keys(el).filter(val => val !== 'Name'),
    name: el.Name
  }));

  useEffect(() => {
    const data_file = `${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-tdr_report/' : './'}assets/data/2022-tdr_report_figure_3_09.csv`;
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
        data={dataFigure}
        data_decimals={0}
        idx="3_15e"
        labels={false}
        note="Global environmental outcomes in two simulated scenarios"
        show_only_first_and_last_labels
        source=" UNCTAD secretariat calculations based on United Nations Global Policy Model"
        subtitle="Projected emissions for business-as-usual scenario vs. South-led low-carbon transition, billion tons, annual average, 1990–2030"
        tick_interval={1}
        title="CO2 emissions: The South-South cooperation effect"
        xlabel=""
      />
      )}
    </div>
  );
}

export default Figure3_15e;
