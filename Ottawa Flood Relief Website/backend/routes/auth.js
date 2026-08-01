const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


router.post("/register", async(req,res)=>{

    try{

        const hashedPassword = await bcrypt.hash(
            req.body.password,
            10
        );


        const user = new User({

            username:req.body.username,

            email:req.body.email,

            password:hashedPassword

        });


        await user.save();


        res.json({
            message:"User created"
        });


    }catch(error){

        res.status(500).json(error);

    }

});


module.exports = router;