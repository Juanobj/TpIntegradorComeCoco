import React from 'react';
import AlumnoList from './components/AlumnoList';
import ProfesorList from './components/ProfesorList';
import { AlumnoService } from './services/alumno.service';
import { profesorService } from './services/profesor.service';

function App() {
  const alumnoService = new AlumnoService();
  const profesorService = new profesorService();

  const mostrarAlumnos = () => {
    const alumnos = alumnoService.getAll();
    console.log(alumnos);
  }

  const mostrarProfesores = () => {
    const profesores = profesorService.getAll();
    console.log(profesores);
  }

  return (
    <div>
      <h1>Bienvenido a la aplicación del Colegio</h1>
      <button onClick={mostrarAlumnos}>Mostrar Alumnos</button>
      <button onClick={mostrarProfesores}>Mostrar Profesores</button>
      <AlumnoList alumnos={[]} />
      <ProfesorList profesores={[]} />
    </div>
  );
}

export default App;
