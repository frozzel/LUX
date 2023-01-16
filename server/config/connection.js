const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-shopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// mongoose.connect( `mongodb+srv://lambdauser:root1234@cluster0.i1qni6a.mongodb.net/?retryWrites=true&w=majority`, {
//   useNewUrlParser: true, useUnifiedTopology: true
// });

module.exports = mongoose.connection;
