const express = require('express');

const router = express.Router();

router.post('/',(req,res,next)=>{
    const data = req.body;
    console.log(data);
    res.send('this is users');
});

router.get('/',(req,res,next)=>{
    const user_id = req.params;
    const data = req.body;
    console.log('data',data);
    console.log('user_id',user_id);
    res.send('this is users');
});

module.exports = router;