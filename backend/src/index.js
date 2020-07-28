require('dotenv').config();
require('./database');

const app = require('./app');
const getData = require('./initData');

async function main() {
  await app.listen(app.get('port'));
  // getData();
  console.log('server on port 4000')
};

main();
