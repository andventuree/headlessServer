//creating this file just so you can require all the node_module dependencies
//so its easier for _db.js do it
//prevents circular reference

//idea here is - "need just one file to import all models and db to app.js"
const db = require('./_db.js').db; //require in your model

//all of our models
const Cheese = require('./models/Cheese')
const Store = require('./models/Store')

//all of our models and their associations
Cheese.belongsToMany(Store, {through: 'Cheese_Store'}) //'as' for alias //through is to connect many to many relationship tables
//need to use belongsToMany to make "through" association
//can't use hasMany
  // if you dont need a many to many, you dont need a through table
  // if its one to one, you can just reference directly
  // but not with many to many (need join table);
//Sequelize association mixins, = db methods to query
  Store.belongsToMany(Cheese, {through: 'Cheese_Store'}) //these relationships allows us to use Sequelize functionality

module.exports = {
  Cheese,
  Store,
  db
}

