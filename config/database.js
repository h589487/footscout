require('dotenv').config();  // Last inn miljøvariabler fra .env-filen
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('FootScoutDB', 'FootScout', 'F00tscout!', {
    host: process.env.DB_HOST,
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true,  // Hvis du bruker en sikker tilkobling (SSL/TLS)
            trustServerCertificate: true  // Hvis du bruker et selvsignert sertifikat
        }
    }
});

module.exports = sequelize;
