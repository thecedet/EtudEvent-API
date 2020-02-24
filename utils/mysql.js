const  mysql = require('mysql');

const config =  {
  host     : process.env.BDD_HOST,
  user     : process.env.BDD_USER,
  password : process.env.BDD_PASSWORD,
  database : process.env.BDD_DATABASE,
}

const connection = mysql.createPool(config)

module.exports = connection