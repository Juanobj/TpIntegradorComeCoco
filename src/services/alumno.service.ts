import { Alumno } from '../models/Alumno';

export class AlumnoService {
  private alumnos: Alumno[] = [];

  // Método para obtener todos los alumnos
  getAll(): Alumno[] {
    return this.alumnos;
  }

  // Método para obtener un alumno por ID
  getById(id: number): Alumno | undefined {
    return this.alumnos.find((alumno) => alumno.id === id);
  }

  // Método para agregar un nuevo alumno
  add(alumno: Alumno): void {
    this.alumnos.push(alumno);
  }

  // Método para actualizar un alumno existente
  update(alumno: Alumno): void {
    const index = this.alumnos.findIndex((a) => a.id === alumno.id);
    if (index !== -1) {
      this.alumnos[index] = alumno;
    }
  }

  // Método para eliminar un alumno por ID
  deleteById(id: number): void {
    const index = this.alumnos.findIndex((alumno) => alumno.id === id);
    if (index !== -1) {
      this.alumnos.splice(index, 1);
    }
  }
}
