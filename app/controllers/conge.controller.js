const congSc=require("../models/conge.model");
exports.ajoutercong=(req,res)=>
{
const conge=new congSc(
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
exports.findCong=(req,res)=>
{
    congSc.find()
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
    congSc.findById(req.params.id)
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