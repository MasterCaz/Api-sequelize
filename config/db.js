const {Sequelize} = require ('sequelize');

//exportar una instancia de sequelize
//configuracion para poder conectar a la base de datos
module.exports = new Sequelize('apisequelizedb', 'root', '1234567890', {
    host: 'localhost',
    dialect: 'mysql',
});
