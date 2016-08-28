var React = require('react');
var PropTypes = React.PropTypes;
//components
var NavigationBar = require('NavigationBar');

var LandingHeader = React.createClass({

  render: function() {
    return (
      <div className="landing-page">
       <NavigationBar/>
      </div>
    );
  }

});

module.exports = LandingHeader;
