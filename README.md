# Dias no feriados en argentina

## Requerimientos

- git
- node >= 10
- `npm` o `yarn`
- `mongoDB`

## Instalación

- `git clone https://github.com/jvleon/dias-feriados.git`

### Base de datos

- Por defecto mongoose intentara conectarse a `mongodb://localhost/feriados`, si se require especificar otro host realice los siguientes pasos.

-  Dentro de la carpeta backend genere una archivo `.env`, dentro de este coloque una variable de entorno con el host de la siguiente forma: `MONGODB_URI=mongodb://localhost/feriados`

### Backend

- `cd dias-feriados && cd backend`
- `npm install` o `yarn`
- `npm run dev` o `yarn run dev`

### Frontend

- `cd dias-feriados && cd frontend`
- `npm install` o `yarn`
- `npm start` o `yarn start`