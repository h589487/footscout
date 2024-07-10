const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Importer sequelize fra din konfigurasjonsfil

const League = sequelize.define('League', {
    leagueid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = League;
