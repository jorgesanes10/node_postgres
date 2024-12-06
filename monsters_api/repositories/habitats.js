const pool = require('../db');

const getAllHabitats = (request, response, next) => {
  pool.query('SELECT * FROM habitats ORDER BY id', (err, res) => {
    if (err) {
      return next(err);
    }

    response.json(res.rows);
  });
};

const getHabitat = (request, response, next) => {
  const { id } = request.params;

  pool.query('SELECT * FROM habitats WHERE id = $1', [id], (err, res) => {
    if (err) {
      return next(err);
    }

    response.json(res.rows);
  });
};

const createHabitat = (request, response, next) => {
  const { name, climate, temperature } = request.body;

  pool.query(
    'INSERT INTO habitats(name, climate, temperature) VALUES($1, $2, $3)',
    [name, climate, temperature],
    (err, res) => {
      if (err) {
        return next(err);
      }

      response.send('Habitat created successfully.');
    },
  );
};

module.exports = {
  getAllHabitats,
  getHabitat,
  createHabitat,
};
