export interface Profesor {
  id: number; // Identificador único del profesor
  nombre: string; // Nombre del profesor
  apellido: string; // Apellido del profesor
  dni: string; // DNI del profesor
  direccion: string; // Dirección del profesor
  telefono: string; // Teléfono del profesor
  email: string; // Email del profesor
  fechaNacimiento: Date; // Fecha de nacimiento del profesor
  materias: number[]; // Lista de IDs de las materias que dicta el profesor
}
