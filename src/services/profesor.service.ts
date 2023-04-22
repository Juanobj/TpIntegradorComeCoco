import { Profesor } from "../models/Profesor";

// Arreglo de objetos de tipo Profesor que se usará para almacenar los profesores
let profesores: Profesor[] = [];

// Función que crea un nuevo profesor
function crearProfesor(profesor: Profesor): Profesor {
  // Se crea una nueva instancia del profesor con un ID único, el cual se genera a partir del largo del arreglo de profesores
  const nuevoProfesor = { ...profesor, id: profesores.length + 1 };
  // Se agrega el nuevo profesor al arreglo de profesores
  profesores.push(nuevoProfesor);
  // Se devuelve el nuevo profesor creado
  return nuevoProfesor;
}

// Función que devuelve todos los profesores
function obtenerProfesores(): Profesor[] {
  // Se devuelve el arreglo de profesores completo
  return profesores;
}

// Función que devuelve un profesor dado su ID
function obtenerProfesorPorId(id: number): Profesor | undefined {
  // Se busca el profesor en el arreglo de profesores y se devuelve si se encuentra, en caso contrario se devuelve undefined
  return profesores.find((profesor) => profesor.id === id);
}

// Función que actualiza un profesor dado su ID y los nuevos datos del profesor
function actualizarProfesor(id: number, profesorActualizado: Profesor): Profesor | undefined {
  // Se busca el índice del profesor a actualizar en el arreglo de profesores
  const indice = profesores.findIndex((profesor) => profesor.id === id);
  if (indice !== -1) {
    // Se obtiene el profesor a actualizar del arreglo de profesores
    const profesor = profesores[indice];
    // Se crea una nueva instancia del profesor actualizado, manteniendo el mismo ID que el profesor original
    const profesorActualizadoConId = { ...profesorActualizado, id: profesor.id };
    // Se actualiza el profesor en el arreglo de profesores
    profesores[indice] = profesorActualizadoConId;
    // Se devuelve el profesor actualizado
    return profesorActualizadoConId;
  }
  // Si el profesor no se encuentra en el arreglo de profesores, se devuelve undefined
  return undefined;
}

// Función que elimina un profesor dado su ID
function eliminarProfesor(id: number): Profesor | undefined {
  // Se busca el índice del profesor a eliminar en el arreglo de profesores
  const indice = profesores.findIndex((profesor) => profesor.id === id);
  if (indice !== -1) {
    // Se obtiene el profesor eliminado del arreglo de profesores
    const profesorEliminado = profesores.splice(indice, 1)[0];
    // Se devuelve el profesor eliminado
    return profesorEliminado;
  }
  // Si el profesor no se encuentra en el arreglo de profesores, se devuelve undefined
  return undefined;
}

// Se exporta un objeto que contiene todas las funciones definidas

export const profesorService = {
  crearProfesor,
  obtenerProfesores,
  obtenerProfesorPorId,
  actualizarProfesor,
  eliminarProfesor,
  getAll: () => profesores,
};
