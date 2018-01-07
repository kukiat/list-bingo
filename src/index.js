import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import bulma from 'bulma/css/bulma.css'
import config from './config'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
