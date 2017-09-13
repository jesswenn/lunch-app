import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import './index.css'
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Pages/Home';
import Randomizer from './components/Pages/Randomizer';
import Info from './components/Pages/Info';

const history = createHistory();

class App extends Component {
	constructor() {
		super();
		this.state = {
			currentPage: 'Home',
			step: 1,
			cat1: [
				'cat1a',
				'cat1b',
				'cat1c'
			],
			cat2: [
				'cat2a',
				'cat2b',
				'cat2c'
			],
			cat3 : [
				'cat3a',
				'cat3b',
				'cat3c'
			],
		}
	}

	fetchLunchSuggestion = (btnChoice) => {
		this.setState({
			currentPage: 'Randomizer',
		})
	}

	render() {
		return (
			
			<Router history = {history}>
				<div className='wrapper'>
					<Header />
					<Route exact path='/' component={Home}></Route>
					<Route path='/randomizer' component={Randomizer}></Route>
					<Route path='/info' component={Info}></Route>
					<Footer />
				</div>
				
			</Router>
		);
	}
}

export default App;
