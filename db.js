const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'notesuser',
  password: 'notespass',
  database: 'notesdb',
  port: 5432,
});

module.exports = pool;