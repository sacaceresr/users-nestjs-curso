<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
</p>

<h1 align="center">Users API - Curso NestJS</h1>

<p align="center">
  Proyecto de ejemplo desarrollado durante el curso de NestJS.<br>
  API RESTful para gestionar usuarios utilizando <a href="http://nestjs.com/" target="_blank">NestJS</a> y <a href="http://nodejs.org" target="_blank">Node.js</a>.
</p>

## Descripción

Este proyecto es una API construida con [NestJS](https://github.com/nestjs/nest) que permite realizar operaciones CRUD sobre una colección de usuarios. Es ideal para aprender los conceptos básicos y buenas prácticas de NestJS.

## Instalación

```bash
npm install
```

## Ejecución de la aplicación

```bash
# modo desarrollo
npm run start

# modo watch (recarga automática)
npm run start:dev

# modo producción
npm run start:prod
```

## Pruebas

```bash
# pruebas unitarias
npm run test

# pruebas end-to-end
npm run test:e2e

# cobertura de pruebas
npm run test:cov
```

## Endpoints principales

- `POST /api/v1/users` - Crear un nuevo usuario  
  **Body ejemplo:**
  ```json
  {
    "id": 1,
    "name": "Juan Pérez",
    "email": "juan@email.com",
    "birthDate": "1990-01-01"
  }
  ```
- `GET /api/v1/users` - Listar todos los usuarios
- `GET /api/v1/users?start=YYYY-MM-DD&end=YYYY-MM-DD` - Filtrar usuarios por fecha de nacimiento
- `PUT /api/v1/users` - Actualizar un usuario
- `DELETE /api/v1/users/:id` - Eliminar un usuario por ID

## Notas

- El campo `birthDate` debe enviarse como string en formato ISO (`YYYY-MM-DD`).
- La validación y transformación de datos se realiza automáticamente usando `class-validator` y `class-transformer`.
- Documentación interactiva disponible en `/swagger` cuando la app está corriendo.

## Recursos

- [Documentación oficial de NestJS](https://docs.nestjs.com/)
- [Curso de NestJS](https://www.udemy.com/course/aprende-nestjs-desde-0)

## Autor

- Sandor Cáceres

## Licencia

MIT