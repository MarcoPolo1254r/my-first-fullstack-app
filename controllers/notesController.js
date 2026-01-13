const pool = require('../db');

exports.createNote = async (req, res) => {
  const { title, content } = req.body;

  const result = await pool.query(
    `INSERT INTO notes (title, content)
     VALUES ($1, $2)
     RETURNING *`,
    [title, content]
  );

  res.status(201).json(result.rows[0]);
};

exports.getNotes = async (req, res) => {
  const result = await pool.query('SELECT * FROM notes');
  res.json(result.rows);
};

exports.updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const result = await pool.query(
    `UPDATE notes
     SET title = $1, content = $2
     WHERE id = $3
     RETURNING *`,
    [title, content, id]
  );

  if (result.rowCount === 0) {
    return res.status(404).json({ error: 'Not found' });
  }

  res.json(result.rows[0]);
};

exports.deleteNote = async (req, res) => {
  const { id } = req.params;

  await pool.query('DELETE FROM notes WHERE id = $1', [id]);
  res.sendStatus(204);
};
