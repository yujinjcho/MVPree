var React = require('react');
var NavbarContainer = require('./NavbarContainer');
require('../../static/css/main-container.css');

var Main = React.createClass({
  render: function() {

    return (
      <div className='main-container'>
        <NavbarContainer/>
      </div>
    );
  }
});

module.exports = Main;
