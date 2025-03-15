import express from "express";
import {PatientAdd} from "../database/mongo-patient-data-store";



const router = express.Router();

router.post('/add',async(req,res)=>{
    console.log(req.body)
    const new_patient = req.body;
    try{
        const adding_patient = await PatientAdd(new_patient);
        res.json(adding_patient);
    }catch (error) {
        console.log('error adding patient',error);
    }
})




export  default router;