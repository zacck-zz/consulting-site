import React from 'react'
import ReactDOM from 'react-dom'

//add components use router for this
import LaunchBar from 'LaunchBar'

//add inject plugin for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';



//start inject pluging
injectTapEventPlugin();
ReactDOM.render(
  <div>
    <LaunchBar/>
  </div>,
  document.getElementById('app')
);
