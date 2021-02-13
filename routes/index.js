const express = require('express');

const router = express.Router();

//importar controladores
const profesoresController = require('../controllers/ProfesoresController');
const asignaturasController = require('../controllers/AsignaturasController');

//definir las rutas y el verbo rest por donde seran atendidas
module.exports = function(){
    //post: agregar profesor
    router.post('/profesores', profesoresController.agregar);

    //get: leer los profesores
    router.get('/profesores', profesoresController.listar);

    router.post('/asignaturas', asignaturasController.agregar);

    router.get('/asignaturas', asignaturasController.listar);

    return router;
}  