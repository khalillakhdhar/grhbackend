const mongoose = require("mongoose");
const CongeSchema= mongoose.Schema(
{
titre:String,
duree:String,
date:String,
raison:String,
justification:String

});
module.exports= mongoose.model("Appcongee",CongeSchema);