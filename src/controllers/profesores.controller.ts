import { Request, Response } from 'express';
import { Profesor } from '../models/Profesor';

const profesores: Profesor[] = [];

// Retorna todos los profesores
export const getProfesores = (req: Request, res: Response) => {
  res.json(profesores);
};

// Retorna un profesor por su id
export const getProfesorById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const profesor = profesores.find((profesor) => profesor.id === id);
  if (profesor) {
    res.json(profesor);
  } else {
    res.status(404).json({ message: 'Profesor no encontrado' });
  }
};

// Crea un nuevo profesor
export const createProfesor = (req: Request, res: Response) => {
  const newProfesor: Profesor = req.body;
  newProfesor.id = profesores.length + 1;
  profesores.push(newProfesor);
  res.status(201).json(newProfesor);
};

// Actualiza un profesor por su id
export const updateProfesor = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updatedProfesor: Profesor = req.body;
  const index = profesores.findIndex((profesor) => profesor.id === id);
  if (index !== -1) {
    profesores[index] = { ...updatedProfesor, id };
    res.json(profesores[index]);
  } else {
    res.status(404).json({ message: 'Profesor no encontrado' });
  }
};

// Elimina un profesor por su id
export const deleteProfesor = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = profesores.findIndex((profesor) => profesor.id === id);
  if (index !== -1) {
    profesores.splice(index, 1);
    res.json({ message: 'Profesor eliminado' });
  } else {
    res.status(404).json({ message: 'Profesor no encontrado' });
  }
};
