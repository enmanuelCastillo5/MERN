const app = require('./app');

const main = async () => {
  await app.listen(4000);
  // eslint-disable-next-line no-console
  console.log('server on port 4000');
};

main();