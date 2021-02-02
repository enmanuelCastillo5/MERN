const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PW}@cluster0.wqmzv.mongodb.net/mernDB?retryWrites=true&w=majority`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(uri, options, (error) => {
  if (error) {
    console.log(`there was an error: ${error}`);
  } else {
    console.log('Database conected.');
  }
});
