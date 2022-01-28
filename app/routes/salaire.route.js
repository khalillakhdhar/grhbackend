module.exports = (app) => {
    const Applicationsalaire=require("../controllers/salaire.controller");
    app.post("/createsal",Applicationsalaire.ajoutersal);
    app.get("/findsal",Applicationsalaire.findsal);
    app.get("/findsalid/:id",Applicationsalaire.findId);
   app.put("/updatesal/:id",Applicationsalaire.mettreajoursal);    
   app.delete("/delete/:id",Applicationsalaire.delete);
}