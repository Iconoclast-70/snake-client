const { up, down, left, right } = require("./constants");

let connection;

const handleUserInput = function(key) {

  if (key === '\u0077') {
    const moveUp = setInterval(() => {
      connection.write(up);
    }, 50);
    setTimeout(() => {
      clearInterval(moveUp);
    }, 100);
  } else if (key === '\u0061') {
    const moveUp = setInterval(() => {
      connection.write(left);
    }, 50);
    setTimeout(() => {
      clearInterval(moveUp);
    }, 100);
  } else if (key === '\u0073') {
    const moveUp = setInterval(() => {
      connection.write(down);
    }, 50);
    setTimeout(() => {
      clearInterval(moveUp);
    }, 100);
  } else if (key === '\u0064') {
    const moveUp = setInterval(() => {
      connection.write(right);
    }, 50);
    setTimeout(() => {
      clearInterval(moveUp);
    }, 100);
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
  return stdin;
};

module.exports = setupInput;