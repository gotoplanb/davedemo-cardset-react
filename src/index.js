import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './styles/salesforce-lightning-design-system.min.css'
import './index.css';

import ListView from './components/ListView';
import App from './components/App';
import NotFound from './components/NotFound';

render((
  <Router history={browserHistory}>
    <Route path="/" component={ListView}/>
    <Route path='/list-view' component={ListView}/>
    <Route path='/app' component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
), document.getElementById('root'))
