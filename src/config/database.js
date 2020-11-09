require('dotenv').config();
const path = require("path");

module.exports = {
    dialect: 'sqlite',
    storage: path.resolve(__dirname,'..','database.sqlite'),
    define: {
      timeStamps: true,
      underscored: true,
      underscoredAll: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },

};
