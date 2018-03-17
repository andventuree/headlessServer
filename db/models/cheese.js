const Sequelize = require('sequelize');
const db = require('../_db.js');

const Cheese = db.define('cheese', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  origin: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,  //these are require by DB
    validate: {  //done by sequelize level
      min: 1
    }
  }
})

module.exports = Cheese;
