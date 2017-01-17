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
        <div className="columns small-12 medium-4 large-4">
        <Card>
          <CardHeader
            title="Zacck Osiemo"
            avatar={require("../images/zack_web_developer.jpg")}
            >
          </CardHeader>
          <CardTitle title="The Web Developer"></CardTitle>
          <CardText>
            I like finding simple solutions to very difficult problems.
          </CardText>
        </Card>
      </div>
      <div className="columns small-12 medium-4 large-4">
        <Card>
          <CardHeader
          title="Cheslin Siebritz"
          avatar={require("../images/coding.jpg")}
          ></CardHeader>
          <CardTitle title="The Designer"></CardTitle>
            <CardText>
              I like making things pretty.
            </CardText>
        </Card>
      </div>
      <div className="columns small-12 medium-4 large-4">
        <Card>
          <CardHeader
            title="Craig Magada"
            avatar={require('../images/craig.jpg')}
            >
          </CardHeader>
          <CardTitle title="The Runner"></CardTitle>
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
