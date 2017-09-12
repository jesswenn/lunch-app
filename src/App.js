import React, { Component } from 'react';
// import { Router, Route, IndexRoute } from 'react-router';
import Layout from './components/Layout/Layout';

class App extends Component {
	render() {

		const Restaurantscat1 = [
			'Res1a',
			'Res1b',
			'Res1c',
			'Res1d',
			'Res1e',
		]

		const Restaurantscat2 = [
			'Res2a',
			'Res2b',
			'Res2c',
			'Res2d',
			'Res2e',
		]

		const Restaurantscat3 = [
			'Res3a',
			'Res3b',
			'Res3c',
			'Res3d',
			'Res3e',
		]

		return (
			<Layout />
		);
	}
}

export default App;
