const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kbtug20210:divya147@cluster0.2big9zy.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Connected!'))
.catch((err) => { console.error(err); });


const employeeController=require('./app/controllers/employeeController')
const express = require("express");
const app = express();

app.use('/employee',employeeController)
app.listen(8080);