import React, {Fragment, useState} from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
const Formulario = ({crearCita}) => {
    const [cita, actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });
    const [error, actualizarError] = useState(false);
    //Funcion que se ejecuta cada vez que un usuario modifica un input
    const actualizarState = (e) =>{
        actualizarCita({
            ...cita,
            [e.target.name]:e.target.value
        });
    }
    const {mascota, propietario, fecha, hora, sintomas} = cita;
    const submitCita = (e) =>{
        e.preventDefault();

        //Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === ''
        || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }
        //Eliminar error
        actualizarError(false);
        //Asignar un id
        cita.id = uuid();
        //Crear cita y añadirla en el state
        crearCita(cita);
        //Reiniciar el Form
       actualizarCita({
           mascota:'',
           propietario:'',
           fecha:'',
           hora:'',
           sintomas:''
       })

    };
    return (
        <Fragment>
            <h2>Crear cita</h2>
            { error ? <p className="alerta-error"> Todos los campos son obligatorios</p> : null}
            <form
                onSubmit={submitCita}>
                <label >Nombre mascotas</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={actualizarState}
                    value={cita.mascota}

                />
                <label >Nombre dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Propietario"
                    onChange={actualizarState}
                    value={cita.propietario}
                />
                <label >Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={cita.fecha}
                />
                <label >Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={cita.hora}
                />
                <label >Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={cita.sintomas}
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
Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired

}
export default Formulario;