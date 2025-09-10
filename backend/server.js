import express, { json } from 'express';
import mongoose from 'mongoose';
const { Schema } = mongoose;
import dbconnection  from './dbconnection.js';
import cors from 'cors';

dbconnection();

const app = express();
app.use(cors());
app.use(express.json());

//task schema
const taskschema = new Schema({
    title:{type:String , required:true},
    done:{type:Boolean, required:true}
    });
const Task = mongoose.model('Task' , taskschema);

// a simple get rout
app.get('/api/health' ,(req , res) => {
    res.send({status:"ok"});
});

//get all tasks
app.get('/api/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});
//add a taks
app.post('/api/tasks' ,async (req, res) =>{
    try {
        const {title , done} = req.body;
        const newTask = new Task({title , done});
        await newTask.save();
        res.json(newTask);
        res.json({ message: 'task created successfully' })
    } catch (err) {
        res.json({ message: 'post not sent' })
        res.status(500).json({err:err.message})
    }
});

 app.listen(3000 , ()=> {
    console.log('server is running on port 3000')
 })   