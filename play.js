/*const net = require('net');

/**
 * Establishes connection with the game server
 */
/*const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
};

const conn = connect();
conn.on('data', data => {
  console.log(data);
});

console.log('Connecting ...');
connect();
*/



const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
connect();

setupInput();

module.exports = { connect };