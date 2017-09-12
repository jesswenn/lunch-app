import React, { Component } from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Layout = (props) => { 
    return (
        <div className='wrapper'>
            <Header />
            <Content />
            <Footer />
            
        </div>
    );
}

export default Layout;
