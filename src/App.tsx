import React from "react";
import { Alumno } from "./models/Alumno";
import { Profesor } from "./models/Profesor";
import { AlumnoService } from "./services/alumno.service";
import { profesorService } from "./services/profesor.service";

function App() {
  const mostrarAlumnos = () => {
    const alumnosListDiv = document.getElementById("alumnosList")!;
    const alumnosList = AlumnoService.getAll();
    const alumnosListHTML = `
      <h2>Lista de Alumnos</h2>
      <ul>
        ${alumnosList.map((alumno: Alumno) => `<li>${alumno.nombre} (${alumno.edad} años)</li>`).join("")}
      </ul>
    `;
    alumnosListDiv.innerHTML = alumnosListHTML;
  };

  const mostrarProfesores = () => {
    const profesoresListDiv = document.getElementById("profesoresList")!;
    const profesoresList = profesorService.getAll();
    const profesoresListHTML = `
      <h2>Listado de Profesores</h2>
      <ul>
        ${profesoresList.map((profesor: Profesor) => `<li>${profesor.nombre} (${profesor.materia})</li>`).join("")}
      </ul>
    `;
    profesoresListDiv.innerHTML = profesoresListHTML;
  };

  return (
    <div>
      <h1>Bienvenido a la aplicación del Colegio</h1>
      <button onClick={mostrarAlumnos}>Mostrar Alumnos</button>
      <button onClick={mostrarProfesores}>Mostrar Profesores</button>
      <div id="alumnosList"></div>
      <div id="profesoresList"></div>
    </div>
  );
}

export default App;
