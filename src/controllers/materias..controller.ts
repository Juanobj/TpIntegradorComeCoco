import { Request, Response } from "express";
import { Materia } from "../models/Materia";

let materias: Materia[] = [
  {
    id: 1,
    nombre: "Matemática",
    descripcion: "Curso de matemática avanzada",
    cupoMaximo: 30,
    profesorId: 1,
    alumnos: [1, 2, 3],
  },
  {
    id: 2,
    nombre: "Física",
    descripcion: "Curso de física teórica",
    cupoMaximo: 25,
    profesorId: 2,
    alumnos: [4, 5],
  },
];

// Obtener todas las materias
export const obtenerMaterias = (req: Request, res: Response) => {
  res.status(200).json({ materias });
};

// Obtener una materia por ID
export const obtenerMateriaPorId = (req: Request, res: Response) => {
  const idMateria = parseInt(req.params.idMateria);
  const materiaEncontrada = materias.find((materia) => materia.id === idMateria);

  if (!materiaEncontrada) {
    return res.status(404).json({ msg: "Materia no encontrada" });
  }

  res.status(200).json({ materia: materiaEncontrada });
};

// Crear una nueva materia
export const crearMateria = (req: Request, res: Response) => {
  const { nombre, descripcion, cupoMaximo, profesorId } = req.body;
  const id = materias.length + 1;

  const nuevaMateria: Materia = {
    id,
    nombre,
    descripcion,
    cupoMaximo,
    profesorId,
    alumnos: [],
  };

  materias.push(nuevaMateria);
  res.status(201).json({ materia: nuevaMateria });
};

// Inscribir un alumno en una materia
export const inscribirAlumnoEnMateria = (req: Request, res: Response) => {
  const idMateria = parseInt(req.params.idMateria);
  const idAlumno = parseInt(req.params.idAlumno);
  const materiaEncontrada = materias.find((materia) => materia.id === idMateria);

  if (!materiaEncontrada) {
    return res.status(404).json({ msg: "Materia no encontrada" });
  }

  if (materiaEncontrada.alumnos.includes(idAlumno)) {
    return res.status(400).json({ msg: "El alumno ya está inscripto en la materia" });
  }

  materiaEncontrada.alumnos.push(idAlumno);
  res.status(200).json({ materia: materiaEncontrada });
};
