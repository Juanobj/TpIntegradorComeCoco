import { Request, Response } from 'express';
import { Matricula } from '../models/Matricula';

const matriculas: Matricula[] = [];

export const getMatriculas = (req: Request, res: Response): void => {
  res.status(200).json(matriculas);
};

export const getMatriculaById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const matricula = matriculas.find((m) => m.id === id);
  if (!matricula) {
    res.status(404).json({ message: `Matricula con id ${id} no encontrada` });
  } else {
    res.status(200).json(matricula);
  }
};

export const createMatricula = (req: Request, res: Response): void => {
  const { idAlumno, idMateria, fecha } = req.body;
  const id = matriculas.length + 1;
  const matricula: Matricula = {
    id,
    idAlumno,
    idMateria,
    fecha,
  };
  matriculas.push(matricula);
  res.status(201).json(matricula);
};

export const updateMatricula = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const { idAlumno, idMateria, fecha } = req.body;
  const matriculaIndex = matriculas.findIndex((m) => m.id === id);
  if (matriculaIndex === -1) {
    res.status(404).json({ message: `Matricula con id ${id} no encontrada` });
  } else {
    const matricula: Matricula = {
      id,
      idAlumno,
      idMateria,
      fecha,
    };
    matriculas[matriculaIndex] = matricula;
    res.status(200).json(matricula);
  }
};

export const deleteMatricula = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const matriculaIndex = matriculas.findIndex((m) => m.id === id);
  if (matriculaIndex === -1) {
    res.status(404).json({ message: `Matricula con id ${id} no encontrada` });
  } else {
    matriculas.splice(matriculaIndex, 1);
    res.status(204).send();
  }
};
