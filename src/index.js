const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const makeupController = require("./controllers/makeupproducts.controller");
app.use("/makeup", makeupController);
const skincareController = require("./controllers/skincareproducts.controller");
app.use("/skincare", skincareController);
const perfumeController = require("./controllers/perfume.controller");
app.use("/perfume", perfumeController);
const mensskincareController = require("./controllers/mensskincare.controller");
app.use("/mensskincare", mensskincareController);
const menscologneController = require("./controllers/menscologne.controller");
app.use("/menscologne", menscologneController);

const haircareController = require("./controllers/haircare.controller");
app.use("/haircare", haircareController);

const cartController = require("./controllers/cartpage.controller");
app.use("/cart", cartController);

const trackController = require("./controllers/trackorder.controller");
app.use("/track", trackController);

const userdataController = require("./controllers/userdata.controller");
app.use("/user", userdataController);

module.exports = app;
