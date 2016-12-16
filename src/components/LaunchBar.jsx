import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'

export class LaunchBar extends Component {
  render() {
    return(
      <AppBar
        title="Launch Design"
        iconElementRight= {
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="About" />
              <MenuItem primaryText="Portfolio" />
              <MenuItem primaryText="Contact" />
          </IconMenu>
        }
      />
    );
  }
};

export default LaunchBar;
