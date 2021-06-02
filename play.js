const net = require("net");
const connect = require("./client");
const setupInput = require("./input");

const snakeConn = connect("135.23.222.131",50542);
// interpret incoming data as text
snakeConn.setEncoding("utf8");

setupInput();

snakeConn.on("connect", () =>{
  //snakeConn.write("connected");
  console.log("connected to snake server");
  snakeConn.write("Name: BSG");
  const up = "Move: up";
  const down = "Move: down";
  const left = "Move: left";
  const right = "Move: right";

  const moveUp = setInterval(() => {
    snakeConn.write(up);
  }, 50);

  setTimeout(() => {
    clearInterval(moveUp);
  }, 300);
  
});

snakeConn.on('data', (data) => {
  console.log(data);
});


