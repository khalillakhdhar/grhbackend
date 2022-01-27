const salSc=require("../models/salaire.model");
exports.ajoutersal=(req,res)=>
{
const salaire=new salSc(
    {
        nette: req.body.nette,
        brutte: req.body.brutte,
        taxes: req.body.taxes
        
        }
);
salaire.save()
.then( (data)=>{
    res.send(data);
})
.catch((err) => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Message.",
    });
  });


}
exports.findsal=(req,res)=>
{
    salSc.find()
    .then((data)=>{
        res.send(data);
    })
    
    .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Message.",
        });
      });
    

}
exports.findId=(req,res)=>
{
    salSc.findById(req.params.id)
    .then((data)=>{
        if(!data)
        res.send("Id not found");
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Message.",
        });
      });
    

}
exports.mettreajoursal=(req,res)=>{
  salSc.findByIdAndUpdate(
    req.params.id,
    {
      nette: req.body.nette,
      brutte: req.body.brutte,
      taxes: req.body.taxes 
    },
    { new: true }
  )
    .then((data) => {      
      if (!data) {
        return res.status(404).send({
          message: "Salaire not found with id " + req.params.id,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Salaire not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error updating Salaire with id " + req.params.id,
      });
    });
};
exports.delete = (req, res) => {
  salSc.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.messageId,
        });
      }
      res.send({ message: "Message deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Could not delete message with id " + req.params.id,
      });
    });
};
