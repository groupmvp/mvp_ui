const http = require('http');
const app = require('./app');

const port = 3001;

const server = http.createServer(app);

server.listen(port, () => {
  console.log('successfully listening on port', port);
});
server.on('error', (err) => {
  console.log('error occured with app server (ui/server/index.js)', err);
});

