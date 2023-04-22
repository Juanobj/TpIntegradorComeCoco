import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Alumno } from './models/Alumno';
import { Profesor } from './models/Profesor';
import { AlumnoService } from './services/alumno.service';
import { profesorService } from './services/profesor.service';

ReactDOM.render(<App />, document.getElementById('root'));

// Obtener los botones de mostrar alumnos y mostrar profesores del DOM
const mostrarAlumnosButton = document.getElementById('mostrarAlumnosButton')!;
const mostrarProfesoresButton = document.getElementById('mostrarProfesoresButton')!;

// Agregar un event listener al botón de mostrar alumnos para que muestre los alumnos al hacer click
mostrarAlumnosButton.addEventListener('click', () => {
  // Obtener el div que contendrá la lista de alumnos del DOM
  const alumnosListDiv = document.getElementById('alumnosList')!;
  // Obtener la lista de alumnos del servicio de alumnos
  const alumnosList: Alumno[] = AlumnoService.getAll();
  // Crear un string con el HTML de la lista de alumnos
  const alumnosListHTML = `
    <h2>Lista de Alumnos</h2>
    <ul>
      ${alumnosList.map(alumno => `<li>${alumno.nombre} (${alumno.edad} años)</li>`).join('')}
    </ul>
  `;
  // Agregar el HTML de la lista de alumnos al div correspondiente
  alumnosListDiv.innerHTML = alumnosListHTML;
});

// Agregar un event listener al botón de mostrar profesores para que muestre los profesores al hacer click
mostrarProfesoresButton.addEventListener('click', () => {
  // Obtener el div que contendrá la lista de profesores del DOM
  const profesoresListDiv = document.getElementById('profesoresList')!;
  // Obtener la lista de profesores del servicio de profesores
  const profesoresList: Profesor[] = profesorService.getAll();
  // Crear un string con el HTML de la lista de profesores
  const profesoresListHTML = `
    <h2>Listado de Profesores</h2>
    <ul>
      ${profesoresList.map(profesor => `<li>${profesor.nombre} (${profesor.materia})</li>`).join('')}
    </ul>
  `;
  // Agregar el HTML de la lista de profesores al div correspondiente
  profesoresListDiv.innerHTML = profesoresListHTML;
});
