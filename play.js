const net = require("net");
const connect = require("./client");
const setupInput = require("./input");

const snakeConn = connect("135.23.222.131",50542);
// interpret incoming data as text
snakeConn.setEncoding("utf8");

//setupInput(snakeConn);

snakeConn.on("connect", () =>{
  
  //snakeConn.write("connected");
  console.log("connected to snake server");
  snakeConn.write("Name: BSG");

  setupInput(snakeConn);

  const moveUp = setInterval(() => {
    snakeConn.write("Move: up");
  }, 50);

  setTimeout(() => {
    clearInterval(moveUp);
  }, 300);
  
});

snakeConn.on('data', (data) => {
  console.log(data);
});


