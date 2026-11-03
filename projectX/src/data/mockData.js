export const users = [
  { id: 1, name: 'Ana Rodríguez', username: 'ana', bio: 'Diseño productos digitales.', following: [2, 3], followers: [2, 3, 4] },
  { id: 2, name: 'Carlos Pérez', username: 'carlos', bio: 'Frontend developer.', following: [1], followers: [1, 3] },
  { id: 3, name: 'María López', username: 'maria', bio: 'Backend y bases de datos.', following: [1, 4], followers: [1, 2, 4] },
  { id: 4, name: 'Juan Gómez', username: 'juan', bio: 'Ingeniería de software.', following: [3], followers: [1, 3] },
  { id: 5, name: 'Lucía Torres', username: 'lucia', bio: 'UX Research.', following: [1, 2], followers: [3] },
];

export const initialTweets = [
  { id: 1, userId: 1, body: 'Hoy comenzamos la maquetación del nuevo proyecto de desarrollo web.', createdAt: '2026-11-02T18:30:00' },
  { id: 2, userId: 2, body: 'React hace que construir interfaces repetibles sea mucho más sencillo.', createdAt: '2026-11-02T17:15:00' },
  { id: 3, userId: 3, body: 'Una buena API comienza con contratos claros y respuestas consistentes.', createdAt: '2026-11-02T15:45:00' },
  { id: 4, userId: 4, body: 'Aprender Git por ramas facilita mucho el trabajo en equipo.', createdAt: '2026-11-01T20:10:00' },
];
