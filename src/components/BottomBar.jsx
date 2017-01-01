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
        <div className="columns large-6 small-6 medium-6">
          <ToolbarGroup firstChild={true}>
            <FlatButton label="+27 724 341 1105"/>
          </ToolbarGroup>
        </div>
        <ToolbarSeparator />
        <div className="columns large-6 small-6 medium-6">
          <ToolbarGroup>
            <FlatButton label="info@launchdesign.co.za"/>
          </ToolbarGroup>
        </div>
      </Toolbar>
    );
  }
};

export default BottomBar;
