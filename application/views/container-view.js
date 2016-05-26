// VENDOR LIBS
const React = require('react');

const ContainerView = React.createClass({

    render () {
        return (<div>{this.props.children}</div>);
    }

});

module.exports = ContainerView;