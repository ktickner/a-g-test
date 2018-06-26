import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Root } from './components';

const RouterComponent = () => (
  <Router>
    <Route path="/" component={Root} />
  </Router>
);

export default RouterComponent;