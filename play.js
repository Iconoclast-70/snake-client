const net = require("net");
const connect = require("./client");

const snakeConn = connect("135.23.222.131",50542);
// interpret incoming data as text
snakeConn.setEncoding("utf8");

snakeConn.on("connect", () =>{
  //snakeConn.write("connected");
  console.log("connected to snake server");
  snakeConn.write("Name: BSG");
});

snakeConn.on('data', (data) => {
  console.log(data);
});

/*
const conn = connect
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () =>{
    conn.write("connected");
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

connect();

*/