var React = require('react');

//components we need in this Component
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav/>
        <div className="row">
          <div className=" small-centered medium-12 large-12 columns">
            {/*render children here*/}
            {props.children}
          </div>
        </div>
    </div>
  );
}

module.exports = Main;
