const express = require("express")
const app = express()
app.use(express.json())

const makeupController = require("./controllers/makeupproducts.controller")
app.use("/makeup", makeupController)
const skincareController = require("./controllers/skincareproducts.controller")
app.use("/skincare", skincareController)

module.exports = app