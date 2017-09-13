import React from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';

import Home from '../Pages/Home';
import Randomizer from '../Pages/Randomizer';
import Info from '../Pages/Info';


export const Links = () => (
    <nav>
        <Link to='/'>HOME</Link>
        <Link to='/randomizer'>RANDOMIZER</Link>
        <Link to='/info'>INFO</Link>
    </nav>
)     


class Header extends React.Component  { 
    render() {
        return (
            <header>LOGO
                <Links />
            </header>
        );
    }
}
    
export default Header;
