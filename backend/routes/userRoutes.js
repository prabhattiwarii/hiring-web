var express = require('express');
var router = express.Router();
const user = require("../models/userSchema");


router.get("/user", async (req, res, next) => {
    // console.log("user");
    try {
        const rec = await user.find({});
        // console.log(rec)
        if (rec) {
            return res.status(200).send(rec)
        }
        else {
            return res.status(200).send({ 'message': 'Data not found' })
        }
    }
    catch (error) {
        return res.status(500).send(error)
    }
})
router.post("/user", async (req, res, next) => {

    try {
        const {first_name, last_name, email, phone, website, interest, message } = req.body;
        // Create a new user instance
        const newUser = new user({ first_name, last_name, email,phone, website, interest,  message });
        // Save the new user to the database
        await newUser.save();
        return res.status(200).send({ message: 'Form submitted successfully' });
    }
    catch (error) {
        return res.status(500).send({ error: error.message });
    }
})
module.exports = router;