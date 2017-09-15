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
import Restaurants from './Data/Restaurants.json';
import Categories from './Data/Categories.json';

const history = createHistory();

class App extends Component {
	constructor() {
		super();
		this.state = {
			step: 1,
			selectedCategory: null,
			restaurantsList: []
		}
	}

//Funktion som kallas på när vi klickat på en katergori-knapp
//Filter function går igenom varje item i arrayen
	choosenCat (category) {
		this.setState({
			step: 2,
			restaurantsList: Restaurants.filter( (item) => { 
				return item.cat_id === category 
			})
		});
	}

	renderSteps(){
		if(this.state.step === 1) {
			return <Home />

		} else if(this.state.step === 2) {
			return <Randomizer restaurantList={this.state.restaurantsList}/>

		} else if( this.state.step === 3) {
			return <Info selectedCategory={this.state.selectedCategory}/>
		}
	}

	render() {
		return (
			<div className='wrapper'>
				<Header />	
				<main>		
				<div className="btn-container">	
				
					{Categories.map((item, index) => {
						return (
							<Button 
								key={ index } 
								btnTxt={ item.name } 
								onClick={ () => this.choosenCat(item.id) }/>
						)	
					})}	
				</div>
				{ this.renderSteps() }
				</main>
				<Footer />
			</div>
		);
	}
}
export default App;
