import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App title='The GitHub Cards App'/>
  </React.StrictMode>
);
