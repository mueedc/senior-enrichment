'use strict';

const Sequelize = require('sequelize');

const db = require('../');

var Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  image: {
    type: Sequelize.STRING,

  }
});

module.exports = Campus;
