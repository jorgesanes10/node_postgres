const pool = require('../db');

const getAllLives = (request, response, next) => {
  pool.query('SELECT * FROM lives', (err, res) => {
    if (err) {
      return next(err);
    }

    response.json(res.rows);
  });
};

const getConditions = (request, response, next) => {
  pool.query(
    'SELECT lives.monster, lives.habitat, habitats.climate, habitats.temperature FROM lives JOIN habitats ON habitats.name = lives.habitat',
    (err, res) => {
      if (err) {
        return next(err);
      }

      response.json(res.rows);
    },
  );
};

module.exports = {
  getAllLives,
  getConditions,
};
