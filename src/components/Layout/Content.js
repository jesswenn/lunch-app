import React, { Component } from 'react';
// import { Router, Route, IndexRoute, Link } from 'react-router';

import Home from '../Pages/Home';
import Randomizer from '../Pages/Randomizer';

const Content = (props) => { 
    return (
        <main>
            {/* {this.props.children} */}
            <Home />
            <Randomizer />
        </main>
    );
}

export default Content;
