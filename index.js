const mongoose = require("mongoose")
const express = require("express")
const Expences = require("./dp")
const app = express()
app.use(express.json())
// const port = 3002

app.get('/',async(req,res)=>{
    try{
            const ex = await Expences.find();
            res.send(ex);
    }catch{
        res.end(err);
    }
})
app.delete("/expences/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const result = await Expences.findByIdAndDelete(id);
        if(result)
        {
            res.end(result);

        }
        else{
            res.end("no expences with that id")

        }
    }catch(err){
        res.send(err)
    }
})
app.post('/res',async(req,res)=>{
    try{
        const ex = req.body;
        await Expences.create(ex);
        res.end("posted")
    }catch(err){
        res.send(err);
    }
})
app.get('/rep',(req,res)=>{
    res.send("Hello world")
})
const port = process.env.PORT || 3002
app.listen(port)
console.log(`server is running in ${port}`)
