import { Matricula } from '../models/Matricula';

interface MatriculaService {
  getAll(): Matricula[];
  getById(id: number): Matricula | undefined;
  create(matricula: Omit<Matricula, 'id'>): Matricula;
  update(id: number, matricula: Omit<Matricula, 'id'>): Matricula | undefined;
  delete(id: number): boolean;
}

let matriculas: Matricula[] = [];
let nextId = 1;

const matriculaService: MatriculaService = {
  getAll: () => {
    return matriculas;
  },
  getById: (id) => {
    return matriculas.find((m) => m.id === id);
  },
  create: (matricula) => {
    const newMatricula = { id: nextId++, ...matricula };
    matriculas.push(newMatricula);
    return newMatricula;
  },
  update: (id, updatedMatricula) => {
    const index = matriculas.findIndex((m) => m.id === id);
    if (index !== -1) {
      const updated = { id, ...updatedMatricula };
      matriculas[index] = updated;
      return updated;
    }
    return undefined;
  },
  delete: (id) => {
    const index = matriculas.findIndex((m) => m.id === id);
    if (index !== -1) {
      matriculas.splice(index, 1);
      return true;
    }
    return false;
  },
};

export default matriculaService;
