var React = require('react');

var WhatWeDo = React.createClass({
    render: function() {
       return(
               <div className="what-we-do">
                 <div className="row">
                   <div className="what small-12 medium-6 large-6 columns">
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
