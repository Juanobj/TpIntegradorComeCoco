export interface Materia {
    id: number;
    nombre: string;
    descripcion: string;
    cupoMaximo: number;
    profesorId: number; // id del profesor que dicta la materia
    alumnos: number[]; // lista de ids de los alumnos inscriptos en la materia
  }
  