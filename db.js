const mongoose = require("mongoose")

const connection = mongoose.connect(
  "mongodb+srv://jackayron5:9931797391@cluster0.nltygvd.mongodb.net/user?retryWrites=true&w=majority"
);


module.exports = {
    connection
}