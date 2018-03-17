const Sequelize = require('sequelize');
const db = require('../_db.js').db;

const Store = db.define('store', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  location: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.ENUM('open', 'closed', 'oob')
  }
  // price: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,  //these are require by DB
  //   validate: {  //done by sequelize level
  //     min: 1
  //   }
  // }
})

module.exports = Store;
