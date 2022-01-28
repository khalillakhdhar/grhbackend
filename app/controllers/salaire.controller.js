const salSc=require("../models/salaire.model");
exports.ajoutersal=(req,res)=>
{
const salaire=new salSc(
    {
        brute: req.body.brute,
        nette: req.body.nette,
        taxes: req.body.taxes,
        
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
exports.findSal=(req,res)=>
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