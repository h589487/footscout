const express = require('express');
const sql = require('mssql');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

// Enable CORS for all requests
app.use(cors());

// Configure database connection
const config = {
  user: 'JoTo',
  password: 'HeiHei',
  server: '192.168.20.43',
  database: 'FootScoutDB',
  options: {
    encrypt: true,
    trustServerCertificate: true
  },
};

// Middleware for parsing JSON body
app.use(express.json());

// Search players with filters
app.get('/api/players/search', async (req, res) => {
  const { name, club, position, nationality, ageMin, ageMax, marketValue } = req.query;

  try {
    let pool = await sql.connect(config);
    let query = 'SELECT * FROM viw_Discover_Players WHERE 1=1';

    if (name) {
      query += ` AND FullName LIKE @name`;
    }
    if (club) {
      query += ` AND ClubName LIKE @club`;
    }
    if (position) {
      query += ` AND PositionName LIKE @position`;
    }
    if (nationality) {
      query += ` AND Nationality LIKE @nationality`;
    }
    if (ageMin) {
      query += ` AND Age >= @ageMin`;
    }
    if (ageMax) {
      query += ` AND Age <= @ageMax`;
    }
    if (marketValue) {
      query += ` AND MarketValue LIKE @marketValue`;
    }

    let request = pool.request();
    if (name) {
      request.input('name', sql.NVarChar, `%${name}%`);
    }
    if (club) {
      request.input('club', sql.NVarChar, `%${club}%`);
    }
    if (position) {
      request.input('position', sql.NVarChar, `%${position}%`);
    }
    if (nationality) {
      request.input('nationality', sql.NVarChar, `%${nationality}%`);
    }
    if (ageMin) {
      request.input('ageMin', sql.Int, ageMin);
    }
    if (ageMax) {
      request.input('ageMax', sql.Int, ageMax);
    }
    if (marketValue) {
      request.input('marketValue', sql.NVarChar, `%${marketValue}%`);
    }

    let result = await request.query(query);
    res.json(result.recordset);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'An error occurred accessing the database', details: err.message });
  }
});

// Fetch unique nationalities
app.get('/api/filters/nationalities', async (req, res) => {
  try {
    let pool = await sql.connect(config);
    const result = await pool.request().query('SELECT DISTINCT Nationality FROM viw_Discover_Players');
    res.json(result.recordset.map(player => player.Nationality));
  } catch (error) {
    console.error('Error fetching nationalities:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Fetch unique clubs
app.get('/api/filters/clubs', async (req, res) => {
  try {
    let pool = await sql.connect(config);
    const result = await pool.request().query('SELECT DISTINCT ClubName FROM viw_Discover_Players');
    res.json(result.recordset.map(player => player.ClubName));
  } catch (error) {
    console.error('Error fetching clubs:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Fetch unique positions
app.get('/api/filters/positions', async (req, res) => {
  try {
    let pool = await sql.connect(config);
    const result = await pool.request().query('SELECT DISTINCT PositionName FROM viw_Discover_Players');
    res.json(result.recordset.map(player => player.PositionName));
  } catch (error) {
    console.error('Error fetching positions:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Root route for welcome message
app.get('/', (req, res) => {
  res.send('Welcome to the server');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
