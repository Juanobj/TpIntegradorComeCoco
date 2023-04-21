import React from 'react';
import AlumnoList from './components/AlumnoList';
import ProfesorList from './components/ProfesorList';
import { AlumnoService } from './services/alumno.service';
import { Profesor, profesorService } from './services/profesor.service';

 // Se importa la interfaz ProfesorService
import { Alumno } from './models/Alumno';

const appProfesorService: Profesor = {
  crearProfesor: (profesor: Profesor) => profesorService.crearProfesor(profesor),
  obtenerProfesores: () => profesorService.obtenerProfesores(),
  obtenerProfesorPorId: (id: number) => profesorService.obtenerProfesorPorId(id),
  actualizarProfesor: (id: number, profesorActualizado: Profesor) => profesorService.actualizarProfesor(id, profesorActualizado),
  eliminarProfesor: (id: number) => profesorService.eliminarProfesor(id),
  id: 0,
  nombre: '',
  apellido: '',
  dni: '',
  direccion: '',
  telefono: '',
  email: '',
  fechaNacimiento: undefined,
  materias: []
};

function App() {
  const alumnoService = new AlumnoService();
  const profesorService = appProfesorService;

  const [alumnos, setAlumnos] = React.useState<Alumno[]>([]);
  const [profesores, setProfesores] = React.useState<Profesor[]>([]);

  const mostrarAlumnos = () => {
    const alumnos = alumnoService.getAll();
    setAlumnos(alumnos);
  };

  const mostrarProfesores = async () => {
    const profesores = await profesorService.obtenerProfesores();
    setProfesores(profesores);
  };

  return (
    <div>
      <h1>Bienvenido a la aplicación del Colegio</h1>
      <button onClick={mostrarAlumnos}>Mostrar Alumnos</button>
      <button onClick={mostrarProfesores}>Mostrar Profesores</button>
      <AlumnoList alumnos={alumnos} />
      <ProfesorList profesores={profesores} />
    </div>
  );
  
}

export default App;
