const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
};

const conn = connect();

conn.on('connect', () => {
  console.log("Successfully connected to game server");
  conn.write("Name: LUV");
  setInterval(func = () =>{
    conn.write("Move: up");
  }, 500);
})
conn.on('data', data => {
  console.log(data);
});

module.exports = connect;