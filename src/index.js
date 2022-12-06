import React from 'react';

import { createRoot } from 'react-dom/client';

// import Video from './jsx/Video.jsx';
// import Quote from './jsx/Quote.jsx';
// import Figure104 from './jsx/Figure1_04.jsx';
// import Figure108 from './jsx/Figure1_08.jsx';
// import Figure109 from './jsx/Figure1_09.jsx';
// import Figure110 from './jsx/Figure1_10.jsx';
// import Figure125 from './jsx/Figure1_25.jsx';
// import Figure203 from './jsx/Figure2_03.jsx';
import Figure205a from './jsx/figures/Figure2_05a.jsx';
import Figure205b from './jsx/figures/Figure2_05b.jsx';
// import Figure206 from './jsx/Figure2_06.jsx';
// import Figure209a from './jsx/Figure2_09a.jsx';
// import Figure209b from './jsx/Figure2_09b.jsx';
// import Figure309 from './jsx/Figure3_09.jsx';
import App from './jsx/App.jsx';

const AppRoot = document.getElementById('app-root-2022-tdr_report');
if (AppRoot) {
  const root = createRoot(AppRoot);
  root.render(<App />);
}
// createRoot(document.getElementById('app-root-2022-tdr_report_video')).render(<Video />);
// createRoot(document.getElementById('app-root-2022-tdr_report_quote')).render(<Quote />);
// createRoot(document.getElementById('app-root-2022-tdr_report_figure_1_04')).render(<Figure104 />);
// createRoot(document.getElementById('app-root-2022-tdr_report_figure_1_08')).render(<Figure108 />);
// createRoot(document.getElementById('app-root-2022-tdr_report_figure_1_09')).render(<Figure109 />);
// createRoot(document.getElementById('app-root-2022-tdr_report_figure_1_10')).render(<Figure110 />);
// createRoot(document.getElementById('app-root-2022-tdr_report_figure_1_25')).render(<Figure125 />);
// createRoot(document.getElementById('app-root-2022-tdr_report_figure_2_03')).render(<Figure203 />);
// createRoot(document.getElementById('app-root-2022-tdr_report_figure_2_06')).render(<Figure206 />);
// createRoot(document.getElementById('app-root-2022-tdr_report_figure_2_09a')).render(<Figure209a />);
// createRoot(document.getElementById('app-root-2022-tdr_report_figure_2_09b')).render(<Figure209b />);
// createRoot(document.getElementById('app-root-2022-tdr_report_figure_3_09')).render(<Figure309 />);

const Figure2_05aRoot = document.getElementById('app-root-2022-tdr_report_figure_2_05a');
if (Figure2_05aRoot) {
  const root = createRoot(Figure2_05aRoot);
  root.render(<Figure205a />);
}
const Figure2_05bRoot = document.getElementById('app-root-2022-tdr_report_figure_2_05b');
if (Figure2_05bRoot) {
  const root = createRoot(Figure2_05bRoot);
  root.render(<Figure205b />);
}
