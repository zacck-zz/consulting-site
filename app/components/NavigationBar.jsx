var React = require('react');

var NavigationBar = React.createClass({
    render: function() {
       return(
               <div className="top-bar">
                 <div className="top-bar-left">
                   <div className="menu">
                     <img src={require('../images/logo_launch_design_white.png')} className="nav-logo"/>
                   </div>
                 </div>
                 <div className="top-bar-right">
                    <ul className="menu">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Portfolio</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
               </div>
             );
    }
});
module.exports =  NavigationBar;
