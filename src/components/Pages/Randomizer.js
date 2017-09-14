import React, { Component } from 'react';

const Randomizer = (props) => { 
    const restaurants = props.restaurantList.map((item, index ) => {
        return <p key={index}>{item}</p>
    })
    return (
        <main>
            <h1>SPINNER</h1>
            <div className="spinner-container">
                {/* <Spinner /> */}
                {restaurants}
                <button>More info here</button>
            </div>
        </main>
    );
}

export default Randomizer;
