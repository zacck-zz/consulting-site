import React from 'react';
export var Footer = React.createClass({
    render: function() {
       return(
               <div>
                <div className="footer-stuff text-center">
                  <img className="footer-logo" src={require('../images/logo_launch_design.png')}/>
                  <p> Contact Us </p>
                  <p><a href='info@launchdesign.co.za'>info@launchdesign.co.za</a></p>
                  <p><a href='+27 (072) 434 1105'>+27 (072) 434 1105</a></p>
                </div>
               </div>
             );
    }
});
export default (Footer);
