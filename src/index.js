// Imports
//////////
import React from 'react';         // View library
import ReactDOM from 'react-dom';  // DOM manipulation
import App from './App'            // The full App view
import './css/index.css'           // The index CSS style file
import registerServiceWorker from './registerServiceWorker'; // Caching & offline abilities

// The render function renders the whole app onto its assigned div on the HTML page
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();