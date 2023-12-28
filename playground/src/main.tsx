import './index.css';

import React from 'react';

import ReactDOM from 'react-dom/client';

const App = React.lazy(() => import('./App'));

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <App />,
);
