import express from "express";
import {DoctorAdd} from "../database/mongo-doctor-data-store";




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




export  default router;