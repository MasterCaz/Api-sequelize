const { request, response } = require('express');
const Profesor = require('../models/Profesor');

/*
crear funciones  ASYNC que van a procesar las peticiones recibidas en el
recurso profesor

/profesores (post, get)
/profesores/1/editar / (put)
/profesores/1 (get -->> show)
*/

//funcion para agregar profesor
exports.agregar = async (request, response, next) => {
    //reques: peticion (solicitud del cliente hacia el servidor)
    //response: respuesta (a la peticion)
    //next: siguiente (continuar con la peticion / request)

    try {
        //crear el profesor con los datos recibidos en el requesr.body
        await Profesor.create(request.body);

        response.json({mensaje: 'Se ha registrado el profesor'});
    } catch (error) {
        console.log(error);

        let errores = [];
        if(error.errors){
            errores = error.errors.map((item) => ({
                campo: item.path,
                error: item.message,

            }))
        }
        response.json({
            error: true,
            mensaje: 'Error al registrar el profesor',
            errores,
        });
        next();
    }
};

//Funcion para listar a los profesores
exports.listar = async (req, res, next) => {
    try {
        //extraer la lista de profesores
        const profesores = await Profesor.findAll({});
        res.json(profesores);
    } catch (error) {
        console.log(error);
        res.json({mensaje: 'Error al leer el profesor'});
    }
}