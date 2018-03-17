//whole point of this file is to instanceate models
//helps to avoid circular reference

const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/cheddar', {logging: false});

module.exports = {
  db
}
