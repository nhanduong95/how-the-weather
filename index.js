import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from "react-router-dom";
import history from './history';
import storeConfig from './store';
import { LINK } from './const';

import MainPage from './page/main/index';
import DetailsPage from './page/details/index';
import './style.css';

render(
  <Provider store={storeConfig()}>
    <Router history={history}>
      <Switch>
        <Route exact path={LINK.MAIN} component={MainPage} />
        <Route path={LINK.DETAILS} component={DetailsPage} />
      </Switch>
    </Router>
  </Provider>, 
document.getElementById('root'));
