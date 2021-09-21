import ReactGA from 'react-ga';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactGA.initialize(process.env.REACT_APP_GA_ID, {
  gaOptions: {
    allowLinker: true
  },
});
ReactGA.ga('require', 'linker');
ReactGA.ga('linker:autoLink', ['gointerview.co', 'payments.gointerview.co']);

ReactDOM.render(<App />, document.getElementById('root'));