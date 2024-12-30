const express = require('express');
const router = express.Router();

router.get('/home',(req,res)=>{
    res.send("Hello from event management!!");
})


module.exports = router; 