const empSc=require("../models/employee.model");
exports.ajouteremp=(req,res)=>
{
const employee=new empSc(
    {
        nom: req.body.nom,
        
        email: req.body.email,
        mdp: req.body.mdp,
        tel: req.body.tel,
        grade: req.body.grade 
    }
);
employee.save()
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