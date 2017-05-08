import React, {Component} from 'react'
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'



export class AboutUs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row about-us">
        <div className="columns small-12 medium-6 large-6">
        <Card>
          <CardHeader
            title="Zacck Osiemo"
            avatar={require("../images/zack_web_developer.jpg")}
            >
          </CardHeader>
          <CardTitle title="Developer"></CardTitle>
          <CardText>
            I like finding simple solutions to very difficult problems.
          </CardText>
        </Card>
      </div>
      <div className="columns small-12 medium-6 large-6">
        <Card>
          <CardHeader
            title="Craig Magada"
            avatar={require('../images/craig.jpg')}
            >
          </CardHeader>
          <CardTitle title="Runner"></CardTitle>
          <CardText>
            I like making sure everything happens on time.
          </CardText>
        </Card>
      </div>
      </div>
    );
  }
};

export default AboutUs;
