import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/app/app";
import './i18n'

ReactDOM.render(
    <Suspense fallback={<h1>Loading data...</h1>}>
        <App />
    </Suspense>,
  document.getElementById('root')
);
