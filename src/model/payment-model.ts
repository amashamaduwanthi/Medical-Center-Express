import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
    {
        AppointmentNo:{type:String,required:true},
        PatientName: { type: String, required: true },
        Amount: {type:Number,required:true},
        PaymentMethod:{type:String,required:true},
    },
    { timestamps: true }
);

const PaymentModel = mongoose.model("payment", PaymentSchema);
export default PaymentModel;