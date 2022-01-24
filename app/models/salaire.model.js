const mongoose = require("mongoose");
const SalaireSchema= mongoose.Schema(
{
nette: Number,
brutte: Number,
taxes: Number

});
<<<<<<< Updated upstream
module.exports= mongoose.model("salaire",SalaireSchema);
=======
module.exports= mongoose.model("salaire",SalaireSchema);
>>>>>>> Stashed changes
