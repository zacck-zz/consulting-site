import React from 'react'
import ReactDOM from 'react-dom'

//add components use router for this
import LaunchBar from 'LaunchBar'

//add inject plugin for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin'

//add a default theme to the app from material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'


//import router
import router from './router/'

//add and apply our styles
import jQuery from 'jquery'
$(document).foundation();
//temp add Main to work on pages
import Main from 'Main'

//build custom material-ui theme
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#df312e",
  },
  appBar: {
    height: 50,
  },
});


//start inject pluging
injectTapEventPlugin();
ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Main/>
  </MuiThemeProvider>,
  document.getElementById('app')
);
