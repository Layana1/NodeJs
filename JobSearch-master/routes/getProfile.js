const { response } = require('express');
const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');

const UserProfile = require('../models/userProfile');

router.get('/getProfile/:userId', function(req, res) {
    console.log("requesting for user",JSON.stringify(req.params.userId))
    //const selectedId = req.body.userId;
    const filter = {userId: req.params.userId};
   // console.log("filter",filter);
     UserProfile.findOne(filter).exec(function(err, result) {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            res.status(200).json({
                "status": true,
                "result":result
            });
        }
    });
    
    

})


module.exports = router;