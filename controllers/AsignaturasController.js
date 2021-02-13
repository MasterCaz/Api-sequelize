const {Op} = require("sequelize");
const { query } = require("../config/db");

const Asignatura = require('../models/Asignatura');
const Profesor = require('../models/Profesor');


exports.agregar = async (request, response, next) => {
    try {
        //crear la asignatura con los datos recibidos en el requesr.body
        await Asignatura.create(request.body);
        response.json({mensaje: 'Se ha registrado la asignatura'});
    } catch (error) {
        console.log(error);
        response.json({mensaje: 'Error al registrar la asignatura'});
    }
};

exports.listar = async (req, res, next) => {
    try {
        ////////// filtro por propiedades
        let filtro = req.query;
        if (req.query.q){
            filtro = {nombre: {[Op.like]: `%${req.query.q}%`}}
            //where nombre like '%web%'
        }
        //extraer la lista de asignaturas
        const asignaturas = await Asignatura.findAll({
            where: filtro,
         //////////
            include:[
                //Se incluyen los datos del Profesor
                {model: Profesor},
            ]
        });
        res.json(asignaturas);
    } catch (error) {
        console.log(error);
        res.json({mensaje: 'Error al leer asignaturas'});
    }
}
    