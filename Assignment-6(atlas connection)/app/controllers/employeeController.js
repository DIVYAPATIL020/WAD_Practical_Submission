const Employee = require('../models/employee.model');
const  express =require('express');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var router=express.Router();

router.post('/create',jsonParser,(req,res)=>{

    Employee.create(req.body);
    res.status(201).json({
        status:"suceess",
    })
})

router.get('./display'.jsonParser,async(req,res)=>{
    const newemp=await Employee.find();
    res.status(200).json({
        status:"suceess",
        data:{newemp}
    })
})

router.get('/search/name',jsonParser,async(req,res)=>{
    const newemp=await Employee.find({name : req.params.names});

    res.status(200).json({
        status:"success",
        result:newemp.length,
        data:{newemp}

    })
})
module.exports = router;