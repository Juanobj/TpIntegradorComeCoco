export interface Materia {
  id: number; // identificador único de la materia
  nombre: string; // nombre de la materia
  descripcion: string; // descripción de la materia
  cupoMaximo: number; // cupo máximo de alumnos para la materia
  profesorId: number; // id del profesor que dicta la materia
  alumnos: number[]; // lista de ids de los alumnos inscriptos en la materia
  // agregar aquí otras propiedades relevantes de la materia, si las hay
}
