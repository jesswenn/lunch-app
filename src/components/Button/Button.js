import React, { Component } from 'react';

const Button = (props) => { 
    return (
        <button className={ props.catBtn } onClick={ props.onClick }>
            <img className='btn-icon' source={ props.btnIcon }/> 
            { props.btnTxt }
        </button>
    );
}

export default Button;
