const congeSc=require("../models/conge.model");
//ajout:
exports.ajouterCong=(req,res)=>
{
const conge=new congeSc(
    {   
            titre:req.body.titre,
            duree:req.body.duree,
            date:req.body.date,
            raison:req.body.raison,
            justification:req.body.justification,
    
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

  
};
// Find a single Id
exports.findOne = (req, res) => {
    congeSc.findById(req.params.id)
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
  };

  //findall
exports.findCong=(req,res)=>
{
    congeSc.find()
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
