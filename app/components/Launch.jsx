var React = require('react');

//components we need in this Component
var NavigationBar = require('NavigationBar');


var Launch = (props) => {
  return (
    <div>
        <div className="row">
            {props.children}
        </div>
    </div>
  );
}

module.exports = Launch;
