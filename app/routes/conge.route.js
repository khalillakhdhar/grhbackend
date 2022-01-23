module.exports = (app) => {
    const Applicationemployee=require("../controllers/conge.controller");
    app.post("/createemp",Applicationemployee.ajouteremp);
    app.get("/findemp",Applicationemployee.findEmp);
    app.get("/findempid/:id",Applicationemployee.findId);
    
    }