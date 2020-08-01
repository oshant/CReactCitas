import React, {Fragment, useState} from 'react';

const Formulario = (props) => {
    const [cita, actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });
    //Funcion que se ejecuta cada vez que un usuario modifica un input
    const actualizarState = (e) =>{
        actualizarCita({
            ...cita,
            [e.target.name]:e.target.value
        });
    }
    const submitCita = (e) =>{
        e.preventDefault();
        //Validar
        //Asignar un id
        //Crear cita y añadirla en el state
        //Reiniciar el Form 

    };
    return (
        <Fragment>
            <h2>Crear cita</h2>
            <form
                onSubmit={submitCita}>
                <label >Nombre mascotas</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={actualizarState}

                />
                <label html>Nombre dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Propietario"
                    onChange={actualizarState}

                />
                <label html>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}

                />
                <label html>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}

                />
                <label html>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                >
                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita
                </button>
            </form>
        </Fragment>
    );
};

export default Formulario;