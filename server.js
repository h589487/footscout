const express = require('express');
const sql = require('mssql');
const cors = require('cors');
require('dotenv').config(); // Last inn miljøvariabler fra .env-filen

const app = express();
const port = 3000;

// Enable CORS for all requests
app.use(cors());

// Konfigurer forbindelsesinformasjonen for MSSQL-database
const config = {
  user: 'Footscout',
  password: 'F00tscout!',
  server: '192.168.20.50', // IP-adresse eller navnet på SQL-serveren
  database: 'FootScoutDB',
  options: {
    encrypt: false, // Bruk hvis du kjører SQL Server i Azure
    enableArithAbort: true // Viktig for å unngå potensielle problemer med query execution
  }
};

// Middleware for å parse JSON-body
app.use(express.json());

// Eksempel på en rute som henter data fra MSSQL-databasen
app.get('/api/clubs', async (req, res) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query('SELECT * FROM [dbo].[tbl_Clubs]');
    res.json(result.recordset);
  } catch (err) {
    console.error('Databasefeil:', err);
    res.status(500).json({ error: 'Det oppsto en feil ved tilgang til databasen', details: err.message });
  }
});

//Rute for View om players i DB
app.get('/api/players', async (req, res) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query('SELECT * FROM viw_Discover_Players');
    res.json(result.recordset);
  } catch (err) {
    console.error('Databasefeil:', err);
    res.status(500).json({ error: 'Det oppsto en feil ved tilgang til databasen', details: err.message });
  }
})

//Eks rute som håndterer søk basert på spiller navn
app.get('/api/players', (req, res) => {
  const query = req.query.name

  //Filtrer spillere basert på navn
  const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(query.toLocaleLowerCase()))

  res.json(filteredPlayers)
})

// Rotstirute for velkomstmelding
app.get('/', (req, res) => {
  res.send('Velkommen til serveren');
});

// Start serveren
app.listen(port, () => {
  console.log(`Serveren kjører på http://localhost:${port}`);
});
