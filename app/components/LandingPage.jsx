var React = require('react');

//components needed
var LandingHeader = require('LandingHeader');
var AboutUs = require('AboutUs');
var WhatWeDo = require('WhatWeDo');
import OurPortfolio from 'OurPortfolio';
import Footer from 'Footer';


var LandingPage = React.createClass({
    render: function() {
       return(
               <div>
                 <LandingHeader/>
                 <AboutUs/>
                 <WhatWeDo/>
                 <OurPortfolio/>
                 <Footer/>
               </div>
             );
    }
});
module.exports =  LandingPage;
