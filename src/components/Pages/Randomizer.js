import React, { Component } from 'react';
import Button from '../Button/Button';

//Here you map through the array 
const Randomizer = ({restaurantList}) => { 
    
    const restaurants = restaurantList.map((restaurant, index ) => {
        return <div className="restaurant-container">
                    <p className='spinner-txt' key={index}>{restaurant.name}</p>
                </div>
    })

    const randomIndex = Math.floor( Math.random() * restaurants.length );

    return (
        <main>
            <div className="spinner-container">
                {restaurants}
            </div>
            <h2>Result:</h2>{ restaurants[randomIndex] }
            
            {/* Button should use the component  */}
            <button class="info-btn">More info</button>
        </main>
    );
}

export default Randomizer;