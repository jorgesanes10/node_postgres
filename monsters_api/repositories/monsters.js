const pool = require('../db');

const getAllMonsters = (request, response, next) => {
  pool.query('SELECT * FROM monsters ORDER BY id', (err, res) => {
    if (err) {
      return next(err);
    }

    response.json(res.rows);
  });
};

const getMonster = (request, response, next) => {
  const { id } = request.params;

  pool.query(`SELECT * FROM monsters WHERE id = $1`, [id], (err, res) => {
    if (err) {
      return next(err);
    }

    response.json(res.rows);
  });
};

const createMonster = (request, response, next) => {
  const { name, personality } = request.body;

  pool.query(
    `INSERT INTO monsters(name, personality) VALUES($1, $2)`,
    [name, personality],
    (err, res) => {
      if (err) {
        return next(err);
      }

      response.send('Monster created successfully.');
    },
  );
};

const updateMonster = (request, response, next) => {
  const { id } = request.params;
  const keys = ['name', 'personality'];
  const fields = [];

  keys.forEach((key) => {
    if (request.body[key]) {
      fields.push(key);
    }
  });

  fields.forEach((field) => {
    pool.query(
      `UPDATE monsters SET ${field} = $1 WHERE id = $2`,
      [request.body[field], id],
      (err, res) => {
        if (err) {
          return next(err);
        }

        response.send('Monster updated successfully.');
      },
    );
  });
};

const deleteMonster = (request, response, next) => {
  const { id } = request.params;

  pool.query('DELETE from monsters WHERE id = $1', [id], (err, res) => {
    if (err) {
      return next(err);
    }

    response.send('Monster deleted successfully.');
  });
};

module.exports = {
  getMonster,
  getAllMonsters,
  createMonster,
  updateMonster,
  deleteMonster,
};
