const mongoose = require('mongoose');
let MONGODB_URI= `mongodb+srv://lambdauser:root1234@cluster0.i1qni6a.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-shopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
