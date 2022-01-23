const empSc=require("../models/conge.model");
exports.ajouteremp=(req,res)=>
{
const conge=new empSc(
    {
        titre: req.body.titre,
        duree: req.body.duree,
        date: req.body.date,
        raison: req.body.raison,
        justification: req.body.justification,
    }
);
conge.save()
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
exports.findEmp=(req,res)=>
{
    empSc.find()
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
    empSc.findById(req.params.id)
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