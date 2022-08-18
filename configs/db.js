const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://sumanJK:sumanjk@cluster0.tgqff.mongodb.net/pharmeasy?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("DB connected");
    }
  );
};
module.exports = connect;
