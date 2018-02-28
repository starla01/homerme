import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import asyncComponent from './hoc/asyncComponent/';

/** load sync components for first and inital load */
const HomeAsync = asyncComponent(() => import('./containers/Home/Home'));

/**
 *  load async components to optimize page load and bundle size
 *  const ExampleAsync = asyncComponent(() => import('./path/to/container'));
*/

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomeAsync} />
        <Redirect to="/" />
      </Switch>
    );
  }
}
