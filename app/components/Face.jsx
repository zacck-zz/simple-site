var React = require('react');

var Face = React.createClass({
    render: function() {
       return(
               <div className="face-page">
                <img className="whatsapp" src={require('../images/squreabdull.jpg')}/>
               </div>
             );
    }
});
module.exports =  Face;
