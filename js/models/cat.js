const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    let Cat = sequelize.define("Cat",{
        name:{
            type: Sequelize.TEXT,
            allowNull: false,
        },
        nickname:{
            type: Sequelize.TEXT,
            allowNull: false,
        },
        price: Sequelize.DOUBLE,

    },{
        timestamps:false
    });

    return Cat;
};