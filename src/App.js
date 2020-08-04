import React, {Fragment, useState, useEffect} from 'react';

import Formulario from "./components/Formulario";
import Cita from "./components/Cita";



function App() {

    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(!citasIniciales){
        citasIniciales = [];
    }
    //Array de citas
    const [citas, actualizarCitas] = useState([]);
    //Actualiza segun modificaciones similar a document.ready pero para
    //el componente y states
    useEffect( () =>{
        console.log('Algo pasó con las citas');
        if(citasIniciales) {
            localStorage.setItem('citas', JSON.stringify(citas));
        }else{
            localStorage.setItem('citas', JSON.stringify([]));
        }
    },[citas]);

    //Funcion que añada una cita
    const crearCita = cita => {
        actualizarCitas([
            ...citas,
            cita
        ])
    }
    const eliminarCita = id =>{
        const nuevasCitas = citas.filter( cita =>cita.id !== id);
        actualizarCitas(nuevasCitas);
    }
    return (
        <Fragment>
            <h1>Administrador de pacientes</h1>
            <div className="container">
                <div className="one-half column">
                    <Formulario
                        crearCita={crearCita}>
                    </Formulario>
                </div>
                <div className="one-half column">
                    <h2>{ citas.length === 0 ? "No hay citas" : "Administra tus citas"}</h2>
                    {citas.map(cita => (
                        <Cita
                            key={cita.id}
                            cita={cita}
                            eliminarCita={eliminarCita}>
                        </Cita>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}
export default App;
