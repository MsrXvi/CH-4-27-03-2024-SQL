const router = require ("express").Router()

const Customer = require("./customerRouter.js")

router.use("/api/v1/customers",Customer)

module.exports = router