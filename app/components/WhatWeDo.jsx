var React = require('react');

var WhatWeDo = React.createClass({
    render: function() {
       return(
               <div className="what-we-do">
                 <div className="row">
                   <div className="what small-12 medium-6 large-6 columns text-center">
                     <p className="what-text-title">WHAT WE DO</p>
                     <p className="what-text">We pride ourselves in a culture of excellence, and being a small team enables us to effectively and efficiently deliver quality products and services with a short turnaround period

Our team is comprised of a number of developers and designers who have diverse backgrounds in business, design and software engineering. Collectively we have numerous years experience in delivering quality work to our clients.</p>
                   </div>
                   <div className="we small-12 medium-6 large-6 columns">
                   </div>
                 </div>
                 <div className="row">
                   <div className="do small-12 medium-6 large-6 columns">
                   </div>
                   <div className="code small-12 medium-6 large-6 columns">
                   </div>
                 </div>
               </div>
             );
    }
});
module.exports =  WhatWeDo;
