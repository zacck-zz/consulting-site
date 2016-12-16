import React, {Component} from 'react'
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'



export class AboutUs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title="Zacck Osiemo"
            avatar={require("../images/zack_web_developer.jpg")}
            >
          </CardHeader>
          <CardTitle title="The Web Developer"></CardTitle>
          <CardText>
            I like finding simple solutions to very difficult problems
          </CardText>
        </Card>
        <Card>
          <CardHeader
          title="Cronje Marike"
          ></CardHeader>
          <CardTitle title="The Designer"></CardTitle>
            <CardText>
              I like making things pretty
            </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Craig Magada"
            avatar={require('../images/craig.jpg')}
            >
          </CardHeader>
          <CardTitle title="The Runner"></CardTitle>
          <CardText>
            I like making sure everything happens on time and as it should
          </CardText>
        </Card>
      </div>
    );
  }
};

export default AboutUs;
