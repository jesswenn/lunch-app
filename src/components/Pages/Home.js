import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import Button from '../Button/Button';


class Home extends Component { 
    render() {
        return (
            <main>
                <div className="btn-container">
                    <Button btnTxt='Knapp 1' onClick={() => this.fetchLunchSuggestions(cat1)}/>
                    <Button btnTxt='Knapp 2' onClick={() => this.fetchLunchSuggestions(cat2)}/>
                    <Button btnTxt='Knapp 3' onClick={() => this.fetchLunchSuggestions(cat3)}/>
                </div>
            </main>
        );
    }
}

export default Home;
