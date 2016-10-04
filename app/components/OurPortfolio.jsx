import React from 'react';
import {connect} from 'react-redux';
export var OurPortfolio = React.createClass({
    render: function() {
       return(
               <div>
                <p>OurPortfolio  Component</p>
               </div>
             );
    }
});
export default connect()(OurPortfolio);
