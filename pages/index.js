import React, { Component } from 'react';
import Layout from '../components/layout';

class Index extends Component {

	render() {
		const { stars } = this.props;
		return (
			<Layout>
				<h1>Home</h1>
			</Layout>
		);
	}
}

export default Index;
