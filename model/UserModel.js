const mongoose = require("mongoose")

const Userschema = new mongoose.Schema({

  username:String,
  email:String,
  password:String

})

const UserModel = mongoose.model('users',Userschema)
module.exports = UserModel;