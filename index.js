var net = require('net');

console.log("HALOJATAHALLOOO")

var client = new net.Socket();
client.connect(8000, '86.115.196.9', function() {
    console.log('Connected');
    client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
    console.log('Received: ' + data);
    client.destroy(); // kill client after server's response
});