import React from 'react';
import { profesorService } from '../services/profesor.service';
import { Profesor } from '../models/Profesor';

interface Props {
}

const ProfesorList: React.FC<Props> = () => {
  const [profesores, setProfesores] = React.useState<Profesor[]>([]);

  React.useEffect(() => {
    const obtenerProfesores = async () => {
      const result = await profesorService.getAll();
      setProfesores(result);
    };
    obtenerProfesores();
  }, []);

  return (
    <div>
      <h2>Listado de Profesores</h2>
      <ul>
        {profesores.map((profesor) => (
          <li key={profesor.id}>
            {profesor.apellido}, {profesor.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfesorList;
