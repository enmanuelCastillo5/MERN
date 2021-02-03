const app = require('./app');
require('./database');

const main = async () => {
  await app.listen(app.get('port'));
  // eslint-disable-next-line no-console
  console.log('server on port', app.get('port'));
};

main();
