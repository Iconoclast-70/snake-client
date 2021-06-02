const net = require("net");

// establishes a connection with the game server
const connect = function(host,port) {
  const conn = net.createConnection({
    host: host,
    port: port
  });
  return conn;
};

module.exports = connect;