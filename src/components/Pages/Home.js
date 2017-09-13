import React, { Component } from 'react';

import Button from '../Button/Button';
const Home = (props) => { 
    return (
        <div className="btn-container">
            <Button /><Link to="/randomizer"><Button /></Link>
            <Button />
            <Button />
        </div>
    );
}

export default Home;
