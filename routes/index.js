const router = require ("express").Router()

const customer = require("../models/customer")
const Customer = require("./customerRouter.js")

router.use("/api/v1/customers",customer)

module.exports = router