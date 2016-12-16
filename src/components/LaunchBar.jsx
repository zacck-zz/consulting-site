import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'

export class LaunchBar extends Component {
  render() {
    return(
      <AppBar
        title="Launch Design"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
};

export default LaunchBar;
