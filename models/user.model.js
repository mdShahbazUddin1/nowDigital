const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{type:String,require:true},
    role:{type:String,require:true},
    email:{type:String,require:true},
    phone:{type:Number,require:true},
})


const UserModel = mongoose.model("user",userSchema)

module.exports = {
    UserModel
}