var React = require('react');

//import Link and index links
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function() {
       return(
               <div className="top-bar">
                 <div className="top-bar-left">
                 </div>
                 <div className="top-bar-right">
                   <ul className="menu top-bar-right">
                     <li className="menu-text">
                       Bio
                     </li>
                   </ul>
                 </div>
               </div>
             );
    }
});
module.exports =  Nav;
