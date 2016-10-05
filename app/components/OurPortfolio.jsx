import React from 'react';
export var OurPortfolio = React.createClass({
    render: function() {
       return(
               <div className="our-portfolio">
                 <div className="text-center">
                   <p className="portfolio-section-title">OUR PORTFOLIO</p>
                   <hr className="port-border"/>
                 </div>
                 <div className="row">
                   <div className="port-item text-center columns small-12 medium-3 large-3">
                     <img className="port-image" src={require('../images/web_design.jpg')}/>
                     <p className="port-label">WEB DESIGN</p>
                   </div>
                   <div className="port-item text-center columns small-12 medium-3 large-3">
                     <img className="port-image" src={require('../images/web_dev.jpg')}/>
                     <p className="port-label">WEB DEVELOPMENT</p>
                   </div>
                   <div className="port-item text-center columns small-12 medium-3 large-3">
                     <img className="port-image" src={require('../images/creative.jpg')}/>
                     <p className="port-label">CONCEPTS</p>
                   </div>
                   <div className="port-item text-center columns small-12 medium-3 large-3">
                     <img className="port-image" src={require('../images/mobile_apps_one.jpg')}/>
                     <p className="port-label">MOBILE APPS</p>
                   </div>
                 </div>

               </div>
             );
    }
});
export default (OurPortfolio);
