//create Profile

// const express=()

const express = require('express')

const router = express.Router();
const mongoose = require('mongoose');

const UserProfile = require('../models/userProfile');

router.post('/createProfile', (req, res, next) => {
    console.log("creating user profile...",req.body)

    const userProfile = {
        
        "fullName": req.body.fullName,
        "phoneNumber": req.body.phoneNumber,
        "website": req.body.website,
        "emailId": req.body.emailId,
        "jobTitle": req.body.jobTitle,
        "location": req.body.location,
        "summary": req.body.summary,
        "experience": req.body.experience,
        "education": req.body.education,
        "skills": req.body.skills
    };
    const userId = {
        "userId": req.body.userId
    }

    console.log("user Profile...",{ "$set":userProfile})
    UserProfile.findOneAndUpdate(userId,userProfile).exec(function (err, docs) {
if (err){
console.log(err)
res.status(500).send(err);
}
else{
console.log("Updated User : ", docs);
res.status(200).send({
            "status": true,
            "result":docs
        });
}
});
 
     

});

module.exports = router;

