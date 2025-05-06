import React, { useState } from 'react';
import './Contador.css';

function Contador() {
    const [contador, setContador] = useState(0);
    const [nombre, setNombre] = useState('');
    const [toggle, setToggle] = useState(false);
    const [usuario, setUsuario] = useState({
        nombre: '',
        edad: 0,
        profesion: ''
    });

    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');

    const actualizarUsuario = () => {
        setUsuario({
            nombre: 'Juan Pérez',
            edad: 30,
            profesion: 'Ingeniero'
        });
    };

    const agregarTarea = () => {
        if (nuevaTarea) {
            setTareas([...tareas, nuevaTarea]);
            setNuevaTarea('');
        }
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = tareas.filter((_, i) => i !== index);
        setTareas(nuevasTareas);
    };
    return (
        <div className='contenido'>
            <div className='bloque'>
                <h2>Contador: {contador}</h2>
                <button onClick={() => setContador(contador + 1)}>
                    Incrementar</button>
                <button onClick={() => setContador(contador - 1)}>
                    Decrementar</button>
            </div>

            <div className='bloque'>
                <input
                    type="text"
                    placeholder="Escribe tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <p>Nombre: {nombre}</p>
            </div>
            <div className='bloque'>
                <button onClick={() => setToggle(!toggle)}>
                    {toggle ? 'Ocultar' : 'Mostrar'} Estado
                </button>

                <p>Estado: {toggle ? 'True' : 'False'}</p>
            </div>
            <div className='bloque'>
                <button onClick={actualizarUsuario}>Actualizar Usuario</button>
                <p>Nombre: {usuario.nombre}</p>
                <p>Edad: {usuario.edad}</p>
                <p>Profesión: {usuario.profesion}</p>
            </div>

            <div className='bloque'>
                <input
                    type="text"
                    placeholder="Nueva tarea"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                />
                <button onClick={agregarTarea}>Agregar Tarea</button>
                <ul>
                    {tareas.map((tarea, index) => (
                        <li key={index} onClick={() => eliminarTarea
                            (index)}>
                            {tarea}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Contador;