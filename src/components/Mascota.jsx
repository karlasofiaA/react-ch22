import React from 'react'
import '../App.css'
import { Edad } from './Edad'

export const Mascota = ({ name, age , show}) => {
    return (
        <>
            <h3 className="Mascota"> Me llamo {name} y soy una mascota</h3>
            <Edad edad={age} show={show} />
        </>
    )
}

