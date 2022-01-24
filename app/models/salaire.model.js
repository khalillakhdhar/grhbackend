

const mongoose = require("mongoose");
const SalaireSchema= mongoose.Schema(
{
nette: Number,
brutte: Number,
taxes: Number

});
module.exports= mongoose.model("salaire",SalaireSchema);
