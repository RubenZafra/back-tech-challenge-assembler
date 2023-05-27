import app from './server.js';
import config from './config/config.js';
import connectDB from './db/connectDB.js';
// import fillDatabase from './db/fillDatabase';

connectDB().then(async function onServerInit() {
  console.log('Database connected');
  // await fillDatabase();

  app.listen(config.app.PORT, () => {
    console.log('Server is running on port ' + config.app.PORT);
  });
});