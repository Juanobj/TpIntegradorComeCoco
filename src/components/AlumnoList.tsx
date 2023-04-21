import React, { useState } from 'react';
import { Alumno } from '../models/Alumno';

type Props = {
  alumnos: Alumno[];
}

function AlumnoList(props: Props) {
  // Definimos el estado para el filtro de búsqueda
  const [filtro, setFiltro] = useState<string>('');

  // Función para actualizar el estado del filtro
  const actualizarFiltro = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(event.target.value);
  }

  // Filtramos los alumnos que coinciden con el texto del filtro
  const alumnosFiltrados = props.alumnos.filter((alumno) => {
    const nombreCompleto = `${alumno.nombre} ${alumno.apellido}`;
    return nombreCompleto.toLowerCase().includes(filtro.toLowerCase());
  });

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <input type="text" placeholder="Buscar por nombre" onChange={actualizarFiltro} />
      <ul>
        {alumnosFiltrados.map((alumno, index) => (
          <li key={alumno.id}>
            <div>{index + 1}</div>
            <div>{alumno.nombre}</div>
            <div>{alumno.apellido}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlumnoList;
