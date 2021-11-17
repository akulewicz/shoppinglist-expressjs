const mongoose = require('mongoose');
const database = 'mongodb://localhost:27017/shopping-list';

mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});