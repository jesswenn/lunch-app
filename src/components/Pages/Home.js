import React, { Component } from 'react';
import Restaurants from '../../Data/Restaurants.json';
import Categories from '../../Data/Categories.json';

import Button from '../Button/Button';


/*------------------------------------------------------------------------------
 Home stateless component
------------------------------------------------------------------------------*/
class Home extends Component {
    render() {
        const { choosenCat } = this.props;
        return (
            <div className="btn-container">	
            
                { Categories.map((item, index) => {
                    return (
                        <Button 
                            key = { index } 
                            btnTxt = { item.name } 
                            onClick={ () => choosenCat(item.id) }
                            catBtn = 'cat-btn'
                            btnIcon = { item.imgIcon }/>
                    )	
                })}	
            </div>
    
        );
    }
}

export default Home;
