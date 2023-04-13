require('dotenv').config()
const app = require('./server');

const {
  PORT=3333,
  LOCAL=true
} = process.env;


const HOST = LOCAL === true ? '127.0.0.1' : '0.0.0.0';

const server = app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});

require('./process-handlers')(server);