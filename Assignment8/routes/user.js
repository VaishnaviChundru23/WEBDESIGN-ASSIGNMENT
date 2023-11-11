const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const User = require("../models/user");
var validator = require("email-validator");

const bcrypt = require("bcrypt");
const saltRounds = 10;

var passwordValidator = require("password-validator");
const user = require("../models/user");

var nameRegEx = /^[a-z ,.'-]+$/i;
var emailRegEx = /^[a-zA-Z0-9._%+-]+@northeastern+\.edu$/;

// Create a schema
var schema = new passwordValidator();

// Add properties to it
schema
    .is()
    .min(8) 
    .is()
    .max(100) 
    .has()
    .uppercase()
    .has()
    .lowercase() 
    .has()
    .digits(2) 
    .has()
    .not()
    .spaces() 
    .is()
    .not()
    .oneOf(["Passw0rd", "Password123"]); 

router.get("/getAll", async(req, res) => {
    try {
        let users = await User.find();

        res.json(users);
    } catch (err) {
        res.send("Error" + err);
    }
});

router.post("/create", async(req, res) => {
    let tempPassword = null;
    if( !req.body.fullname.trim().match(nameRegEx)){
        res.status(400);
        res.json("Invalid fullname, dont include numbers or special characters");
    }
    else if( !req.body.email.trim().match(emailRegEx)){
        res.status(400);
        res.json("Use valid northeastern email id");
    } 
        else if (schema.validate(req.body.password) == false) {
        return res.send("Weak password");
    }
     else {
        const tempuser = await User.findOne({ email: req.body.email });
        if(tempuser != null) return res.send("User with this email already exists");
        await bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
            tempPassword = hash;
           // console.log(hash);
        });
       // console.log(tempPassword);

        const user = new User({
            fullname: req.body.fullname,
            email: req.body.email,
            password: tempPassword,
        });
        //console.log(user);
        
        try {
            const a1 = await user.save();
           // res.send("User succesfully Created",a1);
            res.json(a1);
        } catch (err) {
            res.send(err);
        }
    }
});

router.put("/edit", async(req, res) => {
    let tempCorrectPassword;
    let tempPassword;
    // if (validator.validate(req.body.correctemail) == false) {
    //     return res.send("Enter valid Email Id");
    // } else if (schema.validate(req.body.correctpassword) == false) {
    //     return res.send("Weak password");
    // } else {
    //     await bcrypt
    //         .hash(req.body.correctpassword, saltRounds)
    //         .then(function(hash) {
    //             tempCorrectPassword = hash;
    //         });

    //     await bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
    //         tempPassword = hash;
    //     });

    //     const tempuser = await User.findOne({ email: req.body.email });

    //     console.log(tempuser);
    //     await bcrypt.compare(
    //         req.body.password,
    //         tempuser.password,
    //         async function(err, result) {
    //             if (result == true) {
    //                 try {
    //                     console.log(req.body + tempPassword);
    //                     const user = await User.findOneAndUpdate({ email: req.body.email }, {
    //                         email: req.body.correctemail,
    //                         password: tempCorrectPassword,
    //                     });
    //                     console.log(user);

    //                     res.send("Sucessfully Edited");
    //                 } catch (err) {
    //                     res.send(err);
    //                 }
    //             } else {
    //                 return res.send("false");
    //             }
    //         }
    //     );
    // }
const user = await User.findOne({email:req.body.email});

if(user) {
    const email = req.body.email;
    const password = req.body.password;
    const fullname = req.body.fullname;
    const salt = await bcrypt.genSalt(10);
    const password1 = await bcrypt.hash(password, salt);
    const emailid = await User.find({email: req.body.email} )  
    if(!req.body.fullname.trim().match(nameRegEx)) {    
    const result = await User.findByIdAndUpdate(emailid,{email:email, fullname:fullname , password:password1});
    res.send('Document has been updated');
    return;
    }else {
        res.send('Invalid fullname, dont include numbers or special characters');
    }
}
else {
    res.status(400).send("User not found in Database");
}

});

router.delete("/delete", async(req, res) => {
    const tempuser = await User.findOne({ email: req.body.email });
    
    if(tempuser) {

    await bcrypt.compare(
        req.body.password,
        tempuser.password,
        async function(err, result) {
           // console.log(req.body.password);
   // console.log(tempuser.password);
           // console.log("Result =" + result);
            if (result == false) {
                try {
                   // console.log("Result22");
                    const user = await User.findOneAndDelete({ email: req.body.email });
                    //console.log(user);
                    res.send("Record Successfully Deleted");
                } catch (err) {
                    res.send(err);
                }
            } else {
                return res.send("false");
            }
        }
    );
    } 
    else {
        res.status(400).send("User not found in Database");
    }
});

module.exports = router;