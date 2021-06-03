const net = require("net");
const connect = require("./client");
const setupInput = require("./input");

const snakeConn = connect();
// interpret incoming data as text
snakeConn.setEncoding("utf8");

//setupInput(snakeConn);

snakeConn.on("connect", () =>{

  //snakeConn.write("connected");
  console.log("connected to snake server");
  snakeConn.write("Name: BSG");
  snakeConn.write("Say: HI");
  setupInput(snakeConn);
  
});

snakeConn.on('data', (data) => {
  console.log(data);
});


