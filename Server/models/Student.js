const mongoose=require("mongoose");
const StudentSchema=mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
        id:{
            type:Number,
            unique:true,
            required:true
        },
        password:{
            type:String,
            required:true
        }
});
const Student=mongoose.model("Student",StudentSchema);
module.exports=Student;