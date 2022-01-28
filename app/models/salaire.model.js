

const mongoose = require("mongoose");
const SalSchema= mongoose.Schema(
{
nette: Number,
brutte: Number,
taxes: Number

});
module.exports= mongoose.model("salaire",SalSchema);
