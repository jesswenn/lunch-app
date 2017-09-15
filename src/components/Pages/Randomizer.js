import React, { Component } from 'react';

//Here you map through the array 
const Randomizer = ({restaurantList}) => { 
    
    const restaurants = restaurantList.map((restaurant, index ) => {
        return <p className='spinner-txt' key={index}>{restaurant.name}</p>
     
    })
    

    const randomIndex = Math.floor( Math.random() * restaurants.length );


    return (
        <main>
            <h1>SPINNER</h1>
            <div className="spinner-container">
                {restaurants}
                {/* <button>More info here</button>                 */}
            </div>
            <h2>Result:</h2>{ restaurants[randomIndex] }
        </main>
    );
}

export default Randomizer;