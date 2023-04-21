import { Profesor } from "../models/Profesor";

let profesores: Profesor[] = [];

function crearProfesor(profesor: Profesor): Profesor {
  const nuevoProfesor = { ...profesor, id: profesores.length + 1 };
  profesores.push(nuevoProfesor);
  return nuevoProfesor;
}

function obtenerProfesores(): Profesor[] {
  return profesores;
}

function obtenerProfesorPorId(id: number): Profesor | undefined {
  return profesores.find((profesor) => profesor.id === id);
}

function actualizarProfesor(id: number, profesorActualizado: Profesor): Profesor | undefined {
  const indice = profesores.findIndex((profesor) => profesor.id === id);
  if (indice !== -1) {
    const profesor = profesores[indice];
    const profesorActualizadoConId = { ...profesorActualizado, id: profesor.id };
    profesores[indice] = profesorActualizadoConId;
    return profesorActualizadoConId;
  }
  return undefined;
}

function eliminarProfesor(id: number): Profesor | undefined {
  const indice = profesores.findIndex((profesor) => profesor.id === id);
  if (indice !== -1) {
    const profesorEliminado = profesores.splice(indice, 1)[0];
    return profesorEliminado;
  }
  return undefined;
}

export const profesorService = {
  crearProfesor,
  obtenerProfesores,
  obtenerProfesorPorId,
  actualizarProfesor,
  eliminarProfesor,
};
