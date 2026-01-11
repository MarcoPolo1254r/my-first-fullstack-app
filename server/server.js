const express = require('express');
const pool = require('./db');

const app = express();

app.use(express.json());

app.get('/', (req,res)=> {
    res.send('API is running')
})

app.get('/db-test', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.json(result.rows[0]);
});

const PORT = 3000;
app.listen(PORT,() => {
    console.log(`Server running at http://localhost:${PORT}`);
});