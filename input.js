let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = (key) => {
  const stdout = process.stdout;
  if (key === '\u0003') {
    stdout.write("Buh-Bye");
    process.exit();
}
if(key === 'w'){
  connection.write(UPKEY);
}
if(key === "a"){
  connection.write(LEFTKEY);
}
if(key === "s"){
  connection.write(DOWNKEY);
}
if(key === "d"){
  connnection.write(RIGHTKEY);
  }
if(key === "f"){
  connection.write("Say: Hello");
  } 
if(key === "p"){
  connection.write("Say: BLAM!");
  }
if(key === "l"){
  connection.write("Say: Lalala");
 }
};

module.exports = { setupInput };
