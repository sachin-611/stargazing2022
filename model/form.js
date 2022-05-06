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
//creating registration schema
const registrationSchema = new mongoose.Schema({
  Name:String,
  RegNo:String,
  CollegeEmail:String,
  PhoneNo:String,
  Branch:String,
  Year:String,
  Gender:String
});
const Registration=mongoose.model('Registration',registrationSchema)
// exporting both of the schema
module.exports={Registration}