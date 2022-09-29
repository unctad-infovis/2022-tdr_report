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
import highchartsRegression from 'highcharts-regression';

// Load helpers.
import roundNr from './RoundNr.js';

highchartsAccessibility(Highcharts);
highchartsRegression(Highcharts);

Highcharts.setOptions({
  lang: {
    decimalPoint: '.',
    thousandsSep: ','
  }
});

function LineChart({
  allow_decimals, data, data_decimals, idx, labels, line_width, show_only_first_and_last_labels, source, sub_title, tick_interval, title, xlabel, ymax, ymin
}) {
  const chartRef = useRef();

  const isVisible = useIsVisible(chartRef, { once: true });
  const createChart = useCallback(() => {
    Highcharts.chart(`chartIdx${idx}`, {
      chart: {
        events: {
          load() {
            if (show_only_first_and_last_labels === true) {
              // eslint-disable-next-line react/no-this-in-sfc
              this.series.forEach((series) => {
                if (series.userOptions.isRegressionLine !== true) {
                  series.points[series.points.length - 1].update({
                    dataLabels: {
                      backgroundColor: 'rgba(255, 255, 255, 0.5)',
                      enabled: true,
                      padding: 0,
                      x: 0,
                      y: 25
                    }
                  });
                  series.points[0].update({
                    dataLabels: {
                      enabled: true,
                      y: -10
                    }
                  });
                }
              });
            }
          }
        },
        height: 440,
        marginRight: [40],
        marginTop: [40],
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
        enabled: (data.length > 1),
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
        line: {
          cursor: 'pointer',
          dataLabels: {
            enabled: labels,
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
          lineWidth: line_width,
          marker: {
            enabled: true,
            radius: 0,
            states: {
              hover: {
                animation: false,
                enabled: true,
                radius: 8
              }
            },
            symbol: 'circle'
          },
          states: {
            hover: {
              halo: {
                size: 0
              },
              enabled: true,
              lineWidth: line_width,
            }
          }
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
          allowOverlap: false,
          formatter() {
            if (show_only_first_and_last_labels === true) {
              // eslint-disable-next-line react/no-this-in-sfc
              if (this.isLast || this.isFirst || (this.pos === parseInt(this.chart.pointCount / 2, 10))) {
                // eslint-disable-next-line react/no-this-in-sfc
                // eslint-disable-next-line react/no-this-in-sfc
                return this.value;
              }
              return undefined;
            }
            // eslint-disable-next-line react/no-this-in-sfc
            return this.value;
          },
          enabled: true,
          rotation: show_only_first_and_last_labels ? 1 : 0,
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
        rotation: 0,
        opposite: false,
        tickInterval: tick_interval,
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
        allowDecimals: allow_decimals,
        custom: {
          allowNegativeLog: true
        },
        gridLineColor: 'rgba(124, 112, 103, 0.2)',
        gridLineDashStyle: 'shortdot',
        gridLineWidth: 1,
        labels: {
          style: {
            color: 'rgba(0, 0, 0, 0.8)',
            fontFamily: 'Roboto',
            fontSize: 16,
            fontWeight: 400
          }
        },
        lineColor: 'transparent',
        lineWidth: 0,
        max: ymax,
        min: ymin,
        opposite: false,
        plotLines: [{
          color: 'rgba(124, 112, 103, 0.6)',
          value: 0,
          width: 1
        }],
        showFirstLabel: true,
        showLastLabel: true,
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
  }, [allow_decimals, data, data_decimals, idx, labels, line_width, show_only_first_and_last_labels, tick_interval, xlabel, ymax, ymin]);

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
            <h3>{`${idx} ${title}`}</h3>
            {sub_title && <h4>{sub_title}</h4>}
          </div>
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

LineChart.propTypes = {
  allow_decimals: PropTypes.bool,
  data: PropTypes.instanceOf(Array).isRequired,
  data_decimals: PropTypes.number.isRequired,
  idx: PropTypes.string.isRequired,
  labels: PropTypes.bool,
  line_width: PropTypes.number,
  show_only_first_and_last_labels: PropTypes.bool,
  source: PropTypes.string.isRequired,
  sub_title: PropTypes.string,
  tick_interval: PropTypes.number,
  title: PropTypes.string.isRequired,
  xlabel: PropTypes.string,
  ymax: PropTypes.number,
  ymin: PropTypes.number
};

LineChart.defaultProps = {
  allow_decimals: true,
  labels: true,
  line_width: 5,
  show_only_first_and_last_labels: false,
  sub_title: false,
  tick_interval: 1,
  xlabel: '',
  ymax: undefined,
  ymin: undefined
};

export default LineChart;
