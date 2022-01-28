
const mongoose = require("mongoose");
const EmpSchema= mongoose.Schema(
{
nom:String,
email:String,
mdp:String,
tel:String,
grade:String 

});
module.exports= mongoose.model("employee",EmpSchema);

