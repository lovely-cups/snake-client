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
  connection.write("Move: Up");
}
if(key === "a"){
  connection.write("Move: Left");
}
if(key === "s"){
  connection.write("Move: Down");
}
if(key === "d"){
  connnection.write("Move: Right");
  }
};

module.exports = { setupInput };
