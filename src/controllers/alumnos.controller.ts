import { Alumno } from '../models/Alumno';

const alumnos: Alumno[] = [
  { id: 1, nombre: 'Juan', apellido: 'Pérez', edad: 20 },
  { id: 2, nombre: 'María', apellido: 'Gómez', edad: 22 },
  { id: 3, nombre: 'Pedro', apellido: 'López', edad: 21 }
];

// GET /alumnos
export const obtenerAlumnos = (): Alumno[] => {
  return alumnos;
};

// GET /alumnos/:id
export const obtenerAlumnoPorId = (id: number): Alumno | undefined => {
  return alumnos.find((alumno) => alumno.id === id);
};

// POST /alumnos
export const crearAlumno = (alumno: Alumno): Alumno => {
  const nuevoAlumno = { ...alumno, id: alumnos.length + 1 };
  alumnos.push(nuevoAlumno);
  return nuevoAlumno;
};

// PUT /alumnos/:id
export const actualizarAlumno = (id: number, alumno: Alumno): Alumno | undefined => {
  const indice = alumnos.findIndex((a) => a.id === id);
  if (indice !== -1) {
    alumnos[indice] = { ...alumno, id };
    return alumnos[indice];
  }
  return undefined;
};

// DELETE /alumnos/:id
export const eliminarAlumno = (id: number): Alumno | undefined => {
  const indice = alumnos.findIndex((a) => a.id === id);
  if (indice !== -1) {
    const alumnoEliminado = alumnos.splice(indice, 1)[0];
    return alumnoEliminado;
  }
  return undefined;
};
