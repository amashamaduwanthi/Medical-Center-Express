import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        specialty: {type:String,required:true},
        yearOfExperience:{type:Number,required:true},
        bio:{type:String,required:true}
    },
    { timestamps: true }
);

const DoctorModel = mongoose.model("Doctor", DoctorSchema);
export default DoctorModel;