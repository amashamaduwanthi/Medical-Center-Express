import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        age: {type:Number,required:true},
        email:{type:String,required:true},
        condition:{type:String,required:true},
    },
    { timestamps: true }
);

const PatientModel = mongoose.model("patient", PatientSchema);
export default PatientModel;