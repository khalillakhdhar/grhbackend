module.exports = (app) => {
    const Applicationsalaire=require("../controllers/salaire.controller");
    app.post("/createsal",Applicationsalaire.ajoutersal);
    app.get("/findsal",Applicationsalaire.findSal);
    app.get("/findsalid/:id",Applicationsalaire.findId);
    }