import React from 'react'
import {Route, Router, IndexRoute, hashHistory, IndexRedirect} from 'react-router'
//add components
import LaunchBar from 'LaunchBar'
import Main from 'Main'
import LandingCard from 'LandingCard'

//build and export Router
export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={LandingCard}/>
    </Route>
  </Router>
);
