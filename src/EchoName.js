import React, { Component } from 'react';

class EchoName extends Component {
    render() {
	return(
		<div>
		Hello, {this.props.name}!
		</div>
	);
    }
}

export default EchoName;
