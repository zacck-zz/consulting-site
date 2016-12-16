import React,{Component} from 'react'
import LaunchBar from 'LaunchBar'

export class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <LaunchBar/>
        {this.props.children}
      </div>
    );
  }
};

export default Main;
