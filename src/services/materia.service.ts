import { Materia } from "../models/Materia";

export class MateriaService {
  private materias: Materia[];
  private idCounter: number;

  constructor() {
    this.materias = [];
    this.idCounter = 1;
  }

  getAllMaterias(): Materia[] {
    return this.materias;
  }

  getMateriaById(id: number): Materia | undefined {
    return this.materias.find((materia) => materia.id === id);
  }

  createMateria(materia: Materia): Materia {
    materia.id = this.idCounter++;
    materia.alumnos = [];
    this.materias.push(materia);
    return materia;
  }

  updateMateria(id: number, updatedMateria: Materia): Materia | undefined {
    const index = this.materias.findIndex((materia) => materia.id === id);
    if (index !== -1) {
      this.materias[index] = { ...updatedMateria, id };
      return this.materias[index];
    }
    return undefined;
  }

  deleteMateria(id: number): Materia | undefined {
    const index = this.materias.findIndex((materia) => materia.id === id);
    if (index !== -1) {
      const deletedMateria = this.materias[index];
      this.materias.splice(index, 1);
      return deletedMateria;
    }
    return undefined;
  }

  inscribirAlumnoEnMateria(materiaId: number, alumnoId: number): boolean {
    const materia = this.materias.find((materia) => materia.id === materiaId);
    if (materia) {
      if (materia.alumnos.length < materia.cupoMaximo) {
        if (!materia.alumnos.includes(alumnoId)) {
          materia.alumnos.push(alumnoId);
          return true;
        }
      }
    }
    return false;
  }

  desinscribirAlumnoEnMateria(materiaId: number, alumnoId: number): boolean {
    const materia = this.materias.find((materia) => materia.id === materiaId);
    if (materia) {
      const index = materia.alumnos.findIndex((id) => id === alumnoId);
      if (index !== -1) {
        materia.alumnos.splice(index, 1);
        return true;
      }
    }
    return false;
  }
}
