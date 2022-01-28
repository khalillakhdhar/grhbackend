module.exports = (app) => {
    const Applicationcongee=require("../controllers/conge.controller");
    app.post("/createconge",Applicationcongee.ajouterCong);
    app.get("/findConge",Applicationcongee.findCong);
    app.get("/findcongeid/:id",Applicationcongee.findOne);
    }