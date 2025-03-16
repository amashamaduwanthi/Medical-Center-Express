import express from "express";
import {DoctorAdd, getAllDoctors} from "../database/mongo-doctor-data-store";




const router = express.Router();

router.post('/add',async(req,res)=>{
    console.log(req.body)
    const new_doctor = req.body;
    try{
        const adding_doctor = await DoctorAdd(new_doctor);
        res.json(adding_doctor);
    }catch (error) {
        console.log('error adding doctor',error);

    }
})


router.get('/view',async (req,res)=>{
    const doctors=req.body;
    try {
        const Load_doctors=await getAllDoctors(doctors);
        res.json(Load_doctors)
    }catch (err){
        console.log(err)
    }
})

export  default router;