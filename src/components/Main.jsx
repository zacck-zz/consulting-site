import React,{Component} from 'react'
import LaunchBar from 'LaunchBar'
import LandingCard from 'LandingCard'
import AboutUs from 'AboutUs'
import Services from 'Services'
import BottomBar from 'BottomBar'

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
        <Services/>
        <BottomBar/>
      </div>
    );
  }
};

export default Main;
