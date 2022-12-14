const express=require("express");
const mongoose=require("mongoose");
const StudentModel=require("./models/Student");
const app=express();
app.use(express.json());
mongoose.connect("mongodb+srv://jeevanerp:jeevan123@sdata.ywzjapu.mongodb.net/serp?retryWrites=true&w=majority",
{useNewUrlParser: true, },()=>console.log("Connected to DB"));
app.get('/gets',(req,res)=>res.json(StudData.find()))
app.post("/newstud",async(req,res)=>{
    const studName =req.body.studName;
    const studEmail =req.body.studEmail;
    const studNumber =req.body.studNumber;
    const studPassword=req.body.studPassword;
    const student= new StudentModel({name:studName,email:studEmail,id:studNumber,password:studPassword
    });
    try{
    await student.save();
    res.send("Inserted Values");}

catch(err){
    console.log(err);

}});
app.get("/display",async(req,res)=>{
    StudentModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.json(result);
    });
});
app.get("")
app.put("/upstud",async(req,res)=>{
    const upname=req.body.upName;
    const id=req.body.id;
    
    try{
    await StudentModel.findById(id,(err,upStudent)=>{
        upStudent.name=upname;
        upStudent.save();
        res.json(StudentModel);
    });
    }

catch(err){
    console.log(err);
}});
app.delete("/delstud/:id",async(req,res)=>{
    const id=req.params.id;
    await StudentModel.findByIdAndRemove(id);
});
    app.listen(3005,()=>console.log("Server Ready."))