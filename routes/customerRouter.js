const router = require("express").Router()

const customer = require("../controllers/customerController")

router.post("/", customer.createCustomer)

module.exports = router