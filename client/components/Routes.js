import React from 'react';
import { Route } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import HomePage from './HomePage';
import Blog from './Blog';

const Routes = () => (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/Blog" component={Blog} />
  </div>
);

export default Routes;
