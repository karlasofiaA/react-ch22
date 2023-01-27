import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //Exportacion por Default
import { NombreCompleto as Name} from './components/NombreCompleto'; //Exportacion por nombre
import { Mascota } from './components/Mascota';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> {/* React.Fragment */}
    <App />
    <Name name="Karla" age={26} show={true} /> {/* Agregamos componente */}
    <Mascota name="Solovino" age={8} show={true} />
    <Name name="Pax" age={31} show={false} />
    <Name name="Sergio" age={39} show={false} />
  </>
);