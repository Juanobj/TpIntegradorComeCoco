import React from 'react';
import AlumnoList from './components/AlumnoList';
import { AlumnoService } from './services/alumno.service';

function App() {
  // Creamos una instancia del servicio de alumnos
  const alumnoService = new AlumnoService();

  // Función para mostrar los alumnos
  const mostrarAlumnos = () => {
    const alumnos = alumnoService.getAll();
    console.log(alumnos);
  }

  return (
    <div>
      <h1>Bienvenido a la aplicación del Colegio</h1>
      <button onClick={mostrarAlumnos}>Mostrar Alumnos</button>
      <AlumnoList alumnos={[]} />
    </div>
  );
  
}

export default App;
