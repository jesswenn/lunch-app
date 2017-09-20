import React, { Component } from 'react';
// import Categories from './Data/Categories.json';


const Button = (props) => { 
    return (
        <button className={ props.catBtn } onClick={ props.onClick }>
            <img className='btn-icon' src={ props.btnIcon } /> 

            <span>{ props.btnTxt }</span>

        </button>
    );
}

export default Button;
