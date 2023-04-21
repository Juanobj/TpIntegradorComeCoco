export interface Profesor {
    id: number;
    nombre: string;
    apellido: string;
    dni: string;
    direccion: string;
    telefono: string;
    email: string;
    fechaNacimiento: Date;
    materias: number[]; // lista de ids de las materias que dicta el profesor
  }
  