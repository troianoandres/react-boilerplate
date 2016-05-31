// VENDOR LIBS
const React = require('react');

const IndexView = React.createClass({

    render () {
        return (<div>{this.props.children}</div>);
    }

});

module.exports = IndexView;