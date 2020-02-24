const  mysql = require('mysql');

const config =  {
  host     : process.env.BDD_HOST,
  user     : process.env.BDD_USER,
  password : process.env.BDD_PASSWORD,
  database : process.env.BDD_DATABASE,
}

let connection

function handleDisconnect() {
  connection = mysql.createConnection(config)
  connection.connect(err => {              
    if(err) {                                     
      console.log('error when connecting to db:', err)
      setTimeout(handleDisconnect, 2000); 
    }                                     
  })                                 

  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                        
    } else throw err;                                 

  })
}

handleDisconnect();

module.exports = connection