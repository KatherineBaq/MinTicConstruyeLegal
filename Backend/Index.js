const express = require("express");
const cors = require("cors");
const app = express();
const licenseRouter = require("./Routes/licenseRouter");

// app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.use("/api/license", licenseRouter);

//app.use('/api/v1/', require('./routes/LicenciasRouter.js'));

app.listen(3001 || procces.env.PORT, () => {
  console.log("My port " + 3001);
});
