import React from 'react'
import '../App.css'
import PropTypes from 'prop-types';

const myStyle =  { 
    ocultar:{
        display : "none"
    },
    mostrar:{
        display : "block",
        color : "black",
        backgroundColor : "green"
    }  
} 

export const Edad = ({ edad, show=true}) => {
    return (
        <>{/* React.Fragment */}
            <p
                className='Karla'
                style={ show ? myStyle.mostrar : myStyle.ocultar } >
                ---- Tengo {edad} años ---
            </p>
        </>
    )
}

Edad.protTypes = {
    edad: PropTypes.number.isRequired
};
