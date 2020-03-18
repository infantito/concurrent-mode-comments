import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const app = document.getElementById('root');

// Current React - Or Blocking Rendering React:
// ReactDOM.render(<App />, app);
// Concurrent Mode - Or Interruptible Rendering React:
ReactDOM.createRoot(app).render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
