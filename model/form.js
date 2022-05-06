if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}
const dbURL=process.env.DB_URL
const mongoose = require("mongoose");
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection stablished!");
  })
  .catch((err) => {
    console.log("oh no!!", err);
  });
//creating meeting schema
// const meetingSchema = new mongoose.Schema({
//   roomId: String,
//   msg: [{ message: String, username: String, time: String }],
//   users:[{username:String,id:String}]
// });