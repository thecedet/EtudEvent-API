const  mysql = require('mysql');

connection = mysql.createConnection({
  host     : process.env.BDD_HOST || 'sql2.freemysqlhosting.net',
  user     : process.env.BDD_USER || 'sql2317009',
  password : process.env.BDD_PASSWORD || 'mU8*rZ1*',
  database : process.env.BDD_DATABASE || 'sql2317009'
});
connection.connect()

module.exports = connection