require('dotenv').config();  // Last inn miljøvariabler fra .env-filen
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
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
