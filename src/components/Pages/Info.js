import React, { Component } from 'react';

const Info = (props) => { 
    return (
        <div className="info-container">
            <div className='rest-img'>IMAGE HERE</div>
            <div className='info'>
                <h2>Restaurant name here</h2>
                <p>Cuisine: fetch props
                   Price range: fetch props
                   Rating: fetch props
                   Location: fetch props
                </p>
            </div>
            <div className='menu'>
                <a>DETAILS</a>
                <a>MENU</a>
                <a>RESERVATION</a>
            </div>
            <div className='info'>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Pretium viverra suspendisse potenti nullam. Sit amet 
                    nisl purus in mollis nunc sed. Viverra aliquet eget sit amet 
                    tellus.
                </p>
            </div>
        </div>
    );
}

export default Info;
