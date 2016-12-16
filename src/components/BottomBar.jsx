import React, {Component} from 'react'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';


export class BottomBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <FlatButton label="+27 724 341 1105"/>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <FlatButton label="info@launchdesign.co.za"/>
        </ToolbarGroup>
      </Toolbar>
    );
  }
};

export default BottomBar;
