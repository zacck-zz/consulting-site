var React = require('react');

//components needed
var NavigationBar = require('NavigationBar');

var LandingPage = React.createClass({
    render: function() {
       return(
               <div className="row">
                <NavigationBar/>
               </div>
             );
    }
});
module.exports =  LandingPage;
