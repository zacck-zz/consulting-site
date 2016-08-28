var React = require('react');

var NavigationBar = React.createClass({
    render: function() {
       return(
               <div className="top-bar">
                 <div className="top-bar-left">
                   <div className="menu">
                     <img src={require('../images/logo_launch_design_white.png')} className="nav-logo"/>
                   </div>
                   <ul className="menu">
                      <li><a href="#">HOME</a></li>
                      <li><a href="#">ABOUT</a></li>
                      <li><a href="#">PORTFOLIO</a></li>
                      <li><a href="#">CONTACT</a></li>
                    </ul>
                 </div>
               </div>
             );
    }
});
module.exports =  NavigationBar;
