const net = require("net");
const connect = require("./client");
const setupInput = require("./input");

const snakeConn = connect();
// interpret incoming data as text
snakeConn.setEncoding("utf8");

snakeConn.on("connect", () =>{

  //snakeConn.write("connected");
  console.log("connected to snake server");
  snakeConn.write("Name: BSG");
  setupInput(snakeConn);
  
});

snakeConn.on('data', (data) => {
  console.log(data);
});


