import React, { Component } from 'react';

const Button = (props) => { 
    return (
        <button onClick={props.onClick}>icon here {props.btnTxt}</button>
    );
}

export default Button;
