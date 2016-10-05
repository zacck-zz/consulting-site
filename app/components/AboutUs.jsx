var React = require('react');
var PropTypes = React.PropTypes;

var AboutUs = React.createClass({

  render: function() {
    return (
      <div className="about-us text-center">
        <p className="about-title">WHO WE ARE </p>
        <p className="about-text"> We are a three-man(+woman) team based in Cape Town who are passionate about coding, design and concepts.</p>
        <div className="row">
          <div className="small-12 medium-4 large-4 columns text-center">
            <img src={require('../images/zack_web_developer.jpg')} className="about-pic"/>
            <p className="profile-title">THE WEB DEVELOPER</p>
            <p className="profile-name">ZACCK OSIEMO</p>
            <p className="work-philosophy">I like finding simple solutions to very difficult problems</p>
          </div>
          <div className="small-12 medium-4 large-4 columns text-center">
            <img src={require('../images/marike_designer.jpg')} className="about-pic"/>
              <p className="profile-title">THE DESIGNER</p>
              <p className="profile-name">MARIKER CRONJE</p>
              <p className="work-philosophy">I love pretty things & making ugly things pretty</p>
          </div>
          <div className="small-12 medium-4 large-4 columns text-center">
            <img src={require('../images/craig.jpg')} className="about-pic"/>
              <p className="profile-title">THE RUNNER</p>
              <p className="profile-name">CRAIG MAGADA</p>
              <p className="work-philosophy">I like making sure everything happens on time and as it should</p>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = AboutUs;
