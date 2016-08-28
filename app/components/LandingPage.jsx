var React = require('react');

//components needed
var LandingHeader = require('LandingHeader');
var AboutUs = require('AboutUs');
var WhatWeDo = require('WhatWeDo');


var LandingPage = React.createClass({
    render: function() {
       return(
               <div>
                 <LandingHeader/>
                 <AboutUs/>
                 <WhatWeDo/>
               </div>
             );
    }
});
module.exports =  LandingPage;
