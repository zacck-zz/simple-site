var React = require('react');

//components we need in this Component
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
        <div className="row">
            {/*render children here*/}
            {props.children}
        </div>
    </div>
  );
}

module.exports = Main;
