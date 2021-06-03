const { up, down, left, right } = require("./constants");

let connection;

const handleUserInput = function(key) {

  if (key === 'w') {
    connection.write(up);
  } else if (key === 'a') {
    connection.write(left);
  } else if (key === 's') {
    connection.write(down); 
  } else if (key === 'd') {
    connection.write(right)
  } else if (key === '\u0003') {
    process.exit();
  }
 
};

const setupInput = function(snakeConn) {
  connection = snakeConn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data',handleUserInput);
  connection.write("Say: HI");
  return stdin;
};

module.exports = setupInput;