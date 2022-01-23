module.exports = (app) => {
    const Applicationconge=require("../controllers/conge.controller");
    app.post("/createcon",Applicationconge.ajoutercong);
    app.get("/findcong",Applicationconge.findcong);
    app.get("/findcongid/:id",Applicationconge.findId);
    
    }