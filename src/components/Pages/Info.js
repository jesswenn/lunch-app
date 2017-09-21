import React, { Component } from 'react';

class Info extends Component {
    render() {
        const { selectedRestaurant } = this.props;
        console.log(selectedRestaurant );

        return (
            <div className="info-container">
                <div className='rest-img'>IMAGE HERE</div>
                <div className='info'>
                    <h1>{ selectedRestaurant.name }</h1>
                    <p>Cuisine: { selectedRestaurant.cuisine } </p>
                    <p>Price range: { selectedRestaurant. price_range }</p>
                    <p>Rating: { selectedRestaurant.rating }</p>
                    <p>Location: { selectedRestaurant.address }</p>
                </div>
                <div className='menu'>
                    <div className='menu-item-container'>
                        <a href="#">DETAILS</a>
                        <a href="#">MENU</a>
                        <a href="#">RESERVATION</a>
                    </div>
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
}

export default Info;
