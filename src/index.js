import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './styles/salesforce-lightning-design-system.min.css'
import './index.css';

import Database from './components/Database';
import Table from './components/Table';
import Record from './components/Record';
import NotFound from './components/NotFound';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Database}/>
    <Route path="/:table" component={Table}/>
    <Route path="/:table/:record" component={Record}/>
    <Route path="*" component={NotFound}/>
  </Router>
), document.getElementById('root'))
