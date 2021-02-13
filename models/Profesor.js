const Sequelize = require ('sequelize');

const db = require('../config/db');

//modelo Profesor
const Profesor = db.define('Profesor', {
    id: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: Sequelize.STRING(32),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: 'Nombre no puede quedar vacio',
            },
            isAlpha: {
                args: true,
                msg: 'Solo puede contener letras',
            },
        }
    },
    apellidos: {
        type: Sequelize.STRING(32),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: 'Apellidos no puede quedar vacio',
            },
            isAlpha: {
                args: true,
                msg: 'Solo puede contener letras',
            },
        }
    },
    email: {
        type: Sequelize.STRING(32),
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: 'Email no puede quedar vacio',
            },
            notEmpty: {
                args: true,
                msg: 'Email no puede quedar vacio',
            },
            isEmail: {
                args: true,
                msg: 'No es un email valido',
            },
        }
    },
    telefono: {
        type: Sequelize.STRING(16),
        validate: {
            isMobilePhone: {
                args: ['es-MX'],
                msg: 'No es un numero telefonico valido'
            }
        }
    },
    activo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
    
});

module.exports = Profesor;