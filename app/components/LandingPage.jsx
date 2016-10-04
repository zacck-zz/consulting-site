var React = require('react');

//components needed
var LandingHeader = require('LandingHeader');
var AboutUs = require('AboutUs');
var WhatWeDo = require('WhatWeDo');
import OurPortfolio from 'OurPortfolio';


var LandingPage = React.createClass({
    render: function() {
       return(
               <div>
                 <LandingHeader/>
                 <AboutUs/>
                 <WhatWeDo/>
                 <OurPortfolio/>
               </div>
             );
    }
});
module.exports =  LandingPage;
