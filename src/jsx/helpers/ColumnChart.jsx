import React, {
  /* useState, */ useEffect, useCallback, useRef
} from 'react';
import PropTypes from 'prop-types';

import '../../styles/styles.less';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import { useIsVisible } from 'react-is-visible';

// https://www.highcharts.com/
import Highcharts from 'highcharts';
import highchartsAccessibility from 'highcharts/modules/accessibility';

// Load helpers.
import roundNr from './RoundNr.js';

highchartsAccessibility(Highcharts);

Highcharts.setOptions({
  lang: {
    decimalPoint: '.',
    thousandsSep: ','
  }
});

function ColumnChart({
  idx, data, data_decimals, source, subtitle, title, xlabel, ymax, ymin
}) {
  const chartRef = useRef();

  const isVisible = useIsVisible(chartRef, { once: true });
  const createChart = useCallback(() => {
    Highcharts.chart(`chartIdx${idx}`, {
      chart: {
        height: 650,
        resetZoomButton: {
          theme: {
            fill: '#fff',
            r: 0,
            states: {
              hover: {
                fill: '#0077b8',
                stroke: 'transparent',
                style: {
                  color: '#fff'
                }
              }
            },
            stroke: '#7c7067',
            style: {
              fontFamily: 'Roboto',
              fontSize: 13,
              fontWeight: 400
            }
          }
        },
        style: {
          color: 'rgba(0, 0, 0, 0.8)',
          fontFamily: 'Roboto',
          fontWeight: 400
        },
        type: 'column',
        zoomType: 'x'
      },
      colors: ['#009edb', '#72bf44', '#a066aa', '#f58220'],
      credits: {
        enabled: false
      },
      exporting: {
        chartOptions: {
          legend: {
            enabled: true
          }
        }
      },
      legend: {
        align: 'right',
        enabled: (data.length > 1),
        itemStyle: {
          color: '#000',
          cursor: 'default',
          fontFamily: 'Roboto',
          fontSize: '16px',
          fontWeight: 400
        },
        layout: 'horizontal',
        margin: 0,
        verticalAlign: 'top'
      },
      subtitle: {
        align: 'left',
        enabled: true,
        style: {
          color: 'rgba(0, 0, 0, 0.8)',
          fontSize: '20px',
          fontWeight: 400
        },
        text: subtitle
      },
      title: {
        align: 'left',
        style: {
          color: '#000',
          fontSize: '30px',
          fontWeight: 700
        },
        text: `${idx} ${title}`
      },
      tooltip: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderRadius: 0,
        borderWidth: 1,
        crosshairs: true,
        formatter() {
          // eslint-disable-next-line react/no-this-in-sfc
          const values = this.points.map(point => [point.series.name, point.y, point.color]);
          const rows = [];
          rows.push(values.map(point => `<div style="color: ${point[2]}"><span class="tooltip_label">${point[0]}:</span> <span class="tooltip_value">${roundNr(point[1], data_decimals)}</span></div>`).join(''));
          // eslint-disable-next-line react/no-this-in-sfc
          return `<div class="tooltip_container"><h3 class="tooltip_header">${xlabel} ${this.x}</h3>${rows}</div>`;
        },
        shadow: false,
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          cursor: 'pointer',
          groupPadding: 0,
          dataLabels: {
            enabled: true,
            formatter() {
              // eslint-disable-next-line react/no-this-in-sfc
              return `<div style="color: ${this.color}">${roundNr(this.y, data_decimals)}</div>`;
            },
            style: {
              color: 'rgba(0, 0, 0, 0.8)',
              fontFamily: 'Roboto',
              fontSize: '18px',
              fontWeight: 400
            }
          },
        }
      },
      responsive: {
        rules: [{
          chartOptions: {
            legend: {
              align: 'center',
              layout: 'horizontal',
              verticalAlign: 'bottom'
            }
          },
          condition: {
            maxWidth: 500
          }
        }]
      },
      series: data,
      xAxis: {
        accessibility: {
          description: xlabel
        },
        allowDecimals: false,
        categories: data[0].labels,
        crosshair: {
          color: 'rgba(124, 112, 103, 0.2)',
          width: 1
        },
        labels: {
          rotation: -60,
          formatter: (el) => ((el.value === 'Euro area') ? `<strong>${el.value}</strong>` : el.value),
          style: {
            color: 'rgba(0, 0, 0, 0.8)',
            fontFamily: 'Roboto',
            fontSize: 16,
            fontWeight: 400
          },
          y: 30
        },
        lineColor: 'transparent',
        lineWidth: 0,
        opposite: false,
        plotLines: null,
        showFirstLabel: true,
        showLastLabel: true,
        tickWidth: 1,
        title: {
          enabled: true,
          offset: 40,
          style: {
            color: 'rgba(0, 0, 0, 0.8)',
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontWeight: 400
          },
          text: xlabel
        }
      },
      yAxis: {
        accessibility: {
          description: 'Index'
        },
        allowDecimals: true,
        custom: {
          allowNegativeLog: true
        },
        gridLineColor: 'rgba(124, 112, 103, 0.2)',
        gridLineWidth: 1,
        gridLineDashStyle: 'shortdot',
        labels: {
          style: {
            color: 'rgba(0, 0, 0, 0.8)',
            fontFamily: 'Roboto',
            fontSize: 16,
            fontWeight: 400
          }
        },
        endOnTick: false,
        lineColor: 'transparent',
        lineWidth: 0,
        max: ymax,
        min: ymin,
        opposite: false,
        startOnTick: false,
        plotLines: [{
          color: 'rgba(124, 112, 103, 0.6)',
          value: 0,
          width: 1
        }],
        showFirstLabel: true,
        showLastLabel: true,
        tickInterval: 5,
        title: {
          align: 'high',
          enabled: true,
          reserveSpace: false,
          rotation: 0,
          style: {
            color: 'rgba(0, 0, 0, 0.8)',
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontWeight: 400
          },
          text: '',
          verticalAlign: 'top',
          x: 94,
          y: -25
        },
        type: 'linear'
      }
    });
  }, [idx, data, data_decimals, subtitle, title, xlabel, ymax, ymin]);

  useEffect(() => {
    if (isVisible === true) {
      setTimeout(() => {
        createChart();
      }, 300);
    }
  }, [createChart, isVisible]);

  return (
    <div className="chart_container">
      <div ref={chartRef}>
        {(isVisible) && (
          <div>
            <div className="chart" id={`chartIdx${idx}`} />
            <div className="source_container">
              <span className="source">Source:</span>
              <span className="source_text">{source}</span>
            </div>
          </div>
        ) }
      </div>
    </div>
  );
}

ColumnChart.propTypes = {
  idx: PropTypes.string.isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
  data_decimals: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  xlabel: PropTypes.string,
  ymax: PropTypes.number,
  ymin: PropTypes.number
};

ColumnChart.defaultProps = {
  subtitle: false,
  xlabel: '',
  ymax: undefined,
  ymin: undefined
};

export default ColumnChart;
