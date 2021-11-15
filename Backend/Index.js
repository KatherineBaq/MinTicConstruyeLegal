const express = require("express");
const debug = require("debug")("app:main");
const APIRoutes = require("./routes");
const app = express();
const licenceRouter = require("./licenceRouter.js");

app.use(express.static("public"));
app.use(express.json());

app.use("/api/licence", licenceRouter.router);

//app.use('/api/v1/', require('./routes/LicenciasRouter.js'));

app.listen(3001 || procces.env.PORT, () => {
  console.log("My port " + 3001);
});
