import React,{Component} from 'react'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'


export class Services extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="services">
        <div className="row cardrow">
        <div className="columns small-12 medium-6 large-6">
          <Card>
            <CardMedia
              overlay={<CardTitle title="What We Do"
                subtitle="We pride ourselves in a culture of excellence, and being a small team enables us to effectively and efficiently deliver quality products and services with a short turnaround period Our team is comprised of a number of developers and designers who have diverse backgrounds in business, design and software engineering. Collectively we have numerous years experience in delivering quality work to our clients."
              />}
              >
              <img src={require('../images/what_we_do.jpg')}/>
            </CardMedia>
          </Card>
        </div>
        <div className="columns small-12 medium-6 large-6">
        <Card>
          <CardMedia>
            <img src={require('../images/concepts.jpg')}/>
          </CardMedia>
        </Card>
        </div>
        </div>
        <div className="row cardrow">
        <div className="columns small-12 medium-6 large-6">
        <Card>
          <CardMedia>
            <img src={require('../images/mobile_apps.jpg')}/>
          </CardMedia>
        </Card>
        </div>
        <div className="columns small-12 medium-6 large-6">
        <Card>
          <CardMedia>
            <img src={require('../images/coding.jpg')}/>
          </CardMedia>
        </Card>
        </div>
        </div>
      </div>
    );
  }
};

export default Services;
