import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
    {
        FullName: { type: String, required: true },
        AppointmentNo:{type:Number,required:true},
        Date: {type:String,required:true},
        Time:{type:String,required:true},
        DoctorName:{type:String,required:true},
        PatientEmail:{type:String,required:true}
    },
    { timestamps: true }
);

const AppointmentModel = mongoose.model("Appointment", AppointmentSchema);
export default AppointmentModel;