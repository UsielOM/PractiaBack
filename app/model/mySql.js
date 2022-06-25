const Sequelize = require('sequelize');

const sequelize = new Sequelize("viernes", "root", "sasa", {
    host: "localhost",
    dialect: "mysql",
    port: 3307
})

const Roll = sequelize.define('roll', {
    id_roll: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_roll: { type: Sequelize.STRING }
}, {
    freezeTableName: true,
    timestamps: false
})

init = function() {
    sequelize.authenticate().then(() => {
        console.log("Conexión establecida exitosamente con la BD.");
    }).catch(err => {
        console.error("Conexion no establecida: ", err);
    })


}

// {
//     freezeTableName: true,
//     timestamps: false
// }


module.exports.init = init;