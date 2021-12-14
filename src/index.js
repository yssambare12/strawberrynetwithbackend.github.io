const express = require("express")
const app = express()
app.use(express.json())

const makeupController = require("./controllers/makeupproducts.controller")
app.use("/makeup", makeupController)
module.exports = app