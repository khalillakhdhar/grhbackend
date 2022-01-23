module.exports = (app) => {
    const Applicationconge=require("../controllers/conge.controller");
    app.post("/createcon",Applicationconge.ajoutercong);
    app.get("/findCong",Applicationconge.findCong);
    app.get("/findcongid/:id",Applicationconge.findId);
    
    }