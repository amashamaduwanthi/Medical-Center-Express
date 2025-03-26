import express from "express";
import {AppointmentAdd, getAllAppointments} from "../database/mongo-appoiment-data-store";

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


router.get('/view',async (req,res)=>{
    const appointments = req.body;
    try {
        const Load_appointments = await getAllAppointments(appointments);
        res.json(Load_appointments);
    }catch (error) {
        console.log('error fetching data',error);
    }
});
export default router;