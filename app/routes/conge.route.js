module.exports = (app) => { 
    const Cong = require("../controllers/Conge.controller.js"); 
    app.post("/create", Cong.create); 
    app.get("/get-all", Cong.findAll); 
    app.get("/get-one/:id", Cong.findOne); 
    app.put("/up/:id", Cong.update); 
    app.delete("/del/:id", Cong.delete); 
    };