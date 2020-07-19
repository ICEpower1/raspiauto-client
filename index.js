console.log("0")
var net = require('net');

console.log("1")

var client = new net.Socket();
console.log("2")
client.connect(8000, '86.115.196.9', function() {
    console.log('Connected');
    client.write('Hello, server! Love, Client.');
});
console.log("3")

client.on('data', function(data) {
    console.log('Received: ' + data);
    client.destroy(); // kill client after server's response
});
console.log("4")