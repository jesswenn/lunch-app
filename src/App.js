import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import './index.css'
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Pages/Home';
import Randomizer from './components/Pages/Randomizer';
import Info from './components/Pages/Info';
import Button from './components/Button/Button';

const history = createHistory();

class App extends Component {
	constructor() {
		super();
		this.state = {
			step: 1,
			categories: {
				cat1: ['cat1a','cat1b','cat1c'],
				cat2: ['cat2a','cat2b','cat2c'],
				cat3: ['cat3a','cat3b','cat3c'],
			}, 
			selectedCategory: null,
		}
	}
//Funktion som kallas på när vi klickat på en katergori-knapp
	choosenCat (category) {
		this.setState({
			step: 2,
			selectedCategory: category
		});
		console.log(category);
		// randomizeChoosenCat();
		// this.setState({
		// 	selectedCategory: category,
		// 	step: 3
		// });
	}
	
	renderSteps(){
		if(this.state.step === 1) {
			return <Home />

		} else if(this.state.step === 2) {
			return <Randomizer restaurantList={this.state.selectedCategory}/>

		} else if( this.state.step === 3) {
			return <Info selectedCategory={this.state.selectedCategory}/>
		}
	}

	render() {
		return (
			<div className='wrapper'>
				<Header />
				
				<div className="btn-container">
					{/* <input type='text' onChange={this.choosenCat.bind(this)}></input> */}
					<Button btnTxt='Category 1' onClick={() => this.choosenCat(this.state.categories.cat1)}/>
					<Button btnTxt='Category 2' onClick={() => this.choosenCat(this.state.categories.cat2)}/>
					<Button btnTxt='Category 3' onClick={() => this.choosenCat(this.state.categories.cat3)}/>
				</div>
				{ this.renderSteps() }

				<Footer />
			</div>
		);
	}
}

export default App;
