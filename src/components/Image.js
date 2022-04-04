import React from 'react';

export default function Image(props){

    const mystyle = {
        objectFit: 'cover',
        width: '60px',
        height: '60px',
        borderRadius: '10px',
        boxShadow: '5px 5px gray'
    }

    return(
        <img 
            src={props.src} 
            alt="here image" 
            style={mystyle}
            >
        </img>
    );
}