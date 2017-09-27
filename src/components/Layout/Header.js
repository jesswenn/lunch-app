import React from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';

import Home from '../Pages/Home';
import Randomizer from '../Pages/Randomizer';
import Info from '../Pages/Info';

class Header extends React.Component  { 
    render() {
        return (
            <header>
                <div className="logo-container"></div>
            </header>
        );
    }
}
    
export default Header;
