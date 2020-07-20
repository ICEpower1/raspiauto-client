var connection = new WebSocket('ws://86.115.196.9:8000');
connection.onopen = function () {
  connection.send('Ping'); // Send the message 'Ping' to the server
  console.log('haloo haloo§')
};
