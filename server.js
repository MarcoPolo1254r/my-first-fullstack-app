const express = require('express');
const notesRoutes = require('./routes/notesRoutes');
const usersRoutes = require('./routes/usersRoutesRoutes');

const app = express();

app.use(express.json());
app.use('/notes', notesRoutes);
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.send('API running');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
