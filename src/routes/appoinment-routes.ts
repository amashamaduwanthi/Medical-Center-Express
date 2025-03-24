import express from "express";
import {AppointmentAdd} from "../database/mongo-appoiment-data-store";

const router = express.Router();
router.post('/add',async (req,res)=>{
    const new_appointment = req.body;
    try {
        const adding_newAppointment = await AppointmentAdd(new_appointment);
        res.json(adding_newAppointment);
    }catch (err){
        console.log('error adding appointment',err);
    }
});
export default router;