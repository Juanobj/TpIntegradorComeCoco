+-----------------------------------------------------------------------+
|                                   App                                 |
+-----------------------------------------------------------------------+
| #alumnosService: AlumnoService                                         |
| #profesoresService: ProfesorService                                    |
| #materiasService: MateriaService                                       |
| #matriculasService: MatriculaService                                   |
+-----------------------------------------------------------------------+
                       △                △                 △
                       |                |                 |
            +----------+--------+-------+--------+--------+------------+
            |                   |                |                       |
+-----------+--------+ +--------+--------+ +-----+-------+ +--------------+-------+
|    Alumno            | |     Profesor         | |      Materia              |    Matricula     |
+------------------+ +------------------+ +---------------+ +-------------------------+
| #id: number      | | #id: number      | | #id: number    | | #id: number         |
| #nombre: string  | | #nombre: string  | | #nombre: string| | #alumno: Alumno      |
| #apellido: string| | #apellido: string| | #cargaHoraria: number| #materia: Materia |
| #email: string   | | #email: string   | |                | #profesor: Profesor |
+------------------+ +------------------+ +---------------+ +-------------------------+

