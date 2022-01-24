module.exports = (app) => {
const Applicationemployee=require("../controllers/employee.controller");
app.post("/createemp",Applicationemployee.ajouteremp);
app.get("/findemp",Applicationemployee.findEmp);
app.get("/findempid/:id",Applicationemployee.findId);
}