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

function BarChart({
  idx, data, data_decimals, note, source, sub_title, title, xlabel, ymax, ymin
}) {
  const chartRef = useRef();

  const isVisible = useIsVisible(chartRef, { once: true });
  const createChart = useCallback(() => {
    Highcharts.chart(`chartIdx${idx}`, {
      chart: {
        height: 440,
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
        type: 'bar',
        zoomType: 'x'
      },
      colors: ['#0077b8', '#72bf44', '#a066aa', '#f58220'],
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
        enabled: false,
        floating: true,
        itemStyle: {
          color: '#000',
          fontFamily: 'Roboto',
          fontSize: 22,
          fontWeight: 400
        },
        verticalAlign: 'top',
        y: -20
      },
      title: {
        text: null
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
        bar: {
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
              fontSize: 20,
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
          formatter: (el) => el.value,
          rotation: 0,
          style: {
            color: 'rgba(0, 0, 0, 0.8)',
            fontFamily: 'Roboto',
            fontSize: 16,
            fontWeight: 400
          }
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
            fontSize: 16,
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
        showFirstLabel: false,
        showLastLabel: true,
        tickInterval: 10,
        title: {
          align: 'high',
          enabled: true,
          reserveSpace: false,
          rotation: 0,
          style: {
            color: 'rgba(0, 0, 0, 0.8)',
            fontFamily: 'Roboto',
            fontSize: 16,
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
  }, [idx, data, data_decimals, xlabel, ymax, ymin]);

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
            <div className="title_container">
              <h3>{title}</h3>
              {sub_title && <h4>{sub_title}</h4>}
            </div>
            <div className="chart" id={`chartIdx${idx}`} />
            <div className="source_container">
              <span className="source">Source:</span>
              <span className="source_text">{source}</span>
            </div>
            {note && (
              <div className="note_container">
                <span className="note">Note:</span>
                <span className="note_text">{note}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

BarChart.propTypes = {
  idx: PropTypes.string.isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
  data_decimals: PropTypes.number.isRequired,
  note: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  source: PropTypes.string.isRequired,
  sub_title: PropTypes.string,
  title: PropTypes.string.isRequired,
  xlabel: PropTypes.string.isRequired,
  ymax: PropTypes.number.isRequired,
  ymin: PropTypes.number.isRequired
};

BarChart.defaultProps = {
  note: false,
  sub_title: false
};

export default BarChart;
