import React,{Component} from 'react'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'



export class LandingCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Card>
        <CardMedia>
          <img src={require('../images/header_image.jpg')}/>
        </CardMedia>
      </Card>
    );
  }
};

export default LandingCard;
