import React from 'react';

import { createRoot } from 'react-dom/client';

import Figure18 from './jsx/Figure1_08.jsx';
import Figure19 from './jsx/Figure1_09.jsx';
import Figure110 from './jsx/Figure1_10.jsx';
import Figure23 from './jsx/Figure2_03.jsx';

createRoot(document.getElementById('app-root-2022-tdr_report_figure_1_8')).render(<Figure18 />);
createRoot(document.getElementById('app-root-2022-tdr_report_figure_1_9')).render(<Figure19 />);
createRoot(document.getElementById('app-root-2022-tdr_report_figure_1_10')).render(<Figure110 />);
createRoot(document.getElementById('app-root-2022-tdr_report_figure_2_3')).render(<Figure23 />);
