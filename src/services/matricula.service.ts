import { Matricula } from '../models/Matricula';

// Define una interfaz para el servicio de matrículas, que especifica los métodos que el servicio debe proporcionar
interface MatriculaService {
  getAll(): Matricula[]; // Obtener todas las matrículas
  getById(id: number): Matricula | undefined; // Obtener una matrícula por su id
  create(matricula: Omit<Matricula, 'id'>): Matricula; // Crear una nueva matrícula
  update(id: number, matricula: Omit<Matricula, 'id'>): Matricula | undefined; // Actualizar una matrícula existente
  delete(id: number): boolean; // Eliminar una matrícula
}

// Declara una variable para almacenar las matrículas y el id siguiente para la próxima matrícula
let matriculas: Matricula[] = [];
let nextId = 1;

// Implementa el servicio de matrículas
const matriculaService: MatriculaService = {
  getAll: () => { // Obtiene todas las matrículas
    return matriculas;
  },
  getById: (id) => { // Obtiene una matrícula por su id
    return matriculas.find((m) => m.id === id);
  },
  create: (matricula) => { // Crea una nueva matrícula
    const newMatricula = { id: nextId++, ...matricula };
    matriculas.push(newMatricula);
    return newMatricula;
  },
  update: (id, updatedMatricula) => { // Actualiza una matrícula existente
    const index = matriculas.findIndex((m) => m.id === id);
    if (index !== -1) {
      const updated = { id, ...updatedMatricula };
      matriculas[index] = updated;
      return updated;
    }
    return undefined;
  },
  delete: (id) => { // Elimina una matrícula
    const index = matriculas.findIndex((m) => m.id === id);
    if (index !== -1) {
      matriculas.splice(index, 1);
      return true;
    }
    return false;
  },
};

export default matriculaService; // Exporta el servicio de matrículas por defecto
