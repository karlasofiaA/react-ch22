import React from 'react';
import '../App.css'
import {Edad} from './Edad';

export const NombreCompleto = ( props ) => {
    console.log("Props:",props);
    return (
        <> {/* React.Fragment */}
            <h3 className="Karla"> Me llamo {props.name} </h3>
            {/* <p className="Karla"> Mi edad es {props.age} años </p> */}
            <Edad edad={props.age} show={props.show} /> 
        </>
    );
}

//export {NombreCompleto , OtraExportacion};

