import React from 'react'
import ReactDOM from 'react-dom'

//add components use router for this
import LaunchBar from 'LaunchBar'

//add inject plugin for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';

//add a default theme to the app from material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




//start inject pluging
injectTapEventPlugin();
ReactDOM.render(
  <MuiThemeProvider>
    <LaunchBar/>
  </MuiThemeProvider>,
  document.getElementById('app')
);
