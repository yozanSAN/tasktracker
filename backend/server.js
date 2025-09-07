const express = require('express');
const { Schema, default: mongoose } = require("mongoose");

const app = express();
app.use(express.json());

//task schema
const taskschema = new Schema({
    title:{type:String , required:true},
    done:{type:Boolean, required:true}
    });
const task = mongoose.model('task' , taskschema);

// a simple get rout
app.get('/api/health' ,(req , res) => {
    res.send({status:"ok"});
})

 app.listen(3000 , ()=> {
    console.log('server is running on port 3000')
 })   