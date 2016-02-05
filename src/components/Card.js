$ = jQuery = require('jquery');
var React = require('react');

(function() {
  "use strict";
  var Card = React.createClass( {
    getInitialState: function () {
      return {};
    },

    componentDidMount: function () {
      var card = this;
      jQuery.get("https://api.github.com/users/" + this.props.name, function(data) {
        card.setState(data);
      });
    },

    render: function() {
      return (
        <div>
          <img src={this.state.avatar_url} width="80"></img>
          <h3>{this.state.name}</h3>
          <hr/>
        </div>
      );
    }
  });

module.exports = Card;

})();
