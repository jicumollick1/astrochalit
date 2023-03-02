require("dotenv").config();
const express = require('express');
const router = express.Router();
const path = require("path");
const Insta = require("instamojo-nodejs");
const Transactions = require("../controller/transactions");


const API_KEY = process.env.API_KEY;
const AUTH_KEY = process.env.AUTH_KEY;

Insta.setKeys(API_KEY, AUTH_KEY);
Insta.isSandboxMode(true);

router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../index.html'));
});

router.post("/pay", Transactions.pay);

router.get("/success", (req, res) => {
    res.status(200).json({ message: "Payment Successful" });
});

// router.post('/saveTransaction', Transactions.saveTransaction);


// This should be the last route else any after it won't work
router.use("*", (req, res) => {
    res.status(404).json({
      success: "false",
      message: "Page not found",
      error: {
        statusCode: 404,
        message: "You reached a route that is not defined on this server",
      }
    });
});
  
module.exports = router;