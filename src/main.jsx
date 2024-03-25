import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter'; // Import your custom router
import './index.css'; // Your global styles
import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

