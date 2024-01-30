const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://dineshkumarbalu:Be$smile07@cluster0.r8ihkgy.mongodb.net/expencesdb?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB connected");
})

const exSchema = new mongoose.Schema({
    amount:Number,
    desc: String,
    title:String,
});
const Expences = mongoose.model("Ex",exSchema)
module.exports= Expences;