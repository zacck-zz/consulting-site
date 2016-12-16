import React,{Component} from 'react'
import LaunchBar from 'LaunchBar'
import LandingCard from 'LandingCard'
import AboutUs from 'AboutUs'

export class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <LaunchBar/>
        <LandingCard/>
        <AboutUs/>
      </div>
    );
  }
};

export default Main;
