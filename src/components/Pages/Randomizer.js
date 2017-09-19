import React, { Component } from 'react';
import Button from '../Button/Button';
import {TweenMax} from 'greensock';

//Here you map through the array 
class Randomizer extends Component {

    slotHeight = 99;
    selectedRestaurant;

    constructor(props) {
        super(props);
        this.spin = this.spin.bind(this);
        this.moveSpinnerOneStep = this.moveSpinnerOneStep.bind(this);
        this.stopSpinner = this.stopSpinner.bind(this);
    }

    spin() {
        const restList = this.props.restaurantList;
        const randomRestIndex = Math.floor( Math.random() * restList.length );
        this.selectedRestaurant = restList[ randomRestIndex ];
        this.moveSpinnerOneStep( 1, randomRestIndex === 0 ? restList.length : randomRestIndex, 6);
    }

    moveSpinnerOneStep( stepToGoTo, selectedRestaurantIndex, fullSpins ) {
        TweenMax.killTweensOf(this.refs.slots);
        
        // Have we gone full circle?
        if( stepToGoTo === this.props.restaurantList.length + 1 ) {
            stepToGoTo = 1;
            TweenMax.set( this.refs.slots, { y : 0 } );
            fullSpins--;
        }

        if( fullSpins <= 0 && stepToGoTo === selectedRestaurantIndex ) {
            this.stopSpinner( stepToGoTo );
        } else {
            TweenMax.to( this.refs.slots, 0.1, {
                y: -stepToGoTo * this.slotHeight,
                ease: Linear.easeNone,
                onComplete: () => {
                    this.moveSpinnerOneStep( stepToGoTo + 1, selectedRestaurantIndex, fullSpins );
                }
            });
        }
    }

    stopSpinner( stepToGoTo ) {
        this.props.onRestaurantSelected( this.selectedRestaurant );

        TweenMax.to( this.refs.slots, 2, {
            y: -stepToGoTo * this.slotHeight,
            ease: Elastic.easeOut
        } );
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.restaurantList !== this.props.restaurantList) {
            this.spin();
        }
    }
    
    componentDidMount () {
        this.spin();
    }
    
    componentWillUnmount() {
        TweenMax.killTweensOf( this.refs.slots );
    }

    render() {
        const {restaurantList} = this.props;

        const restaurants = [ ...restaurantList, restaurantList[0] ].map((restaurant, index ) => {
            return (
                <div key={index} className="restaurant-container">
                    <p className='spinner-txt' >{restaurant.name}</p>
                </div>
            )
        });

        return (
            <main>
                {/* spinner container = slotmachine */}
                <div className="slot-machine">
                    <div ref='slots' className='slot-container'>
                        {restaurants}
                    </div>
                </div>
                
                {/* Button should use the component  */}
                {/* <button class="info-btn">More info</button> */}
            </main>
        );
    } 
}

export default Randomizer;