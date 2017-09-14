import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import Button from '../Button/Button';

/*------------------------------------------------------------------------------

------------------------------------------------------------------------------*/
class Home extends Component { 
    render() {
        return (
            <main>
                <h1>HOME</h1>
                {/* onClick={() => this.selectRestaurants(cat1)} */}
                {/* <div className="btn-container">
                    <Button btnTxt='Category 1' onClick={() => 
                        this.selectRestaurants(this.props.categories.cat1)}/>
                    <Button btnTxt='Category 2' onClick={() => 
                        this.selectRestaurants(this.categories.cat4)}/>
                    <Button btnTxt='Category 3' onClick={() => 
                        this.selectRestaurants(this.categories.cat3)}/>
                </div> */}
            </main>
        );
    }
}

export default Home;
