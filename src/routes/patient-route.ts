import express from "express";
import {deletePatient, getAllPatients, PatientAdd} from "../database/mongo-patient-data-store";



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

router.get('/view',async (req,res)=>{
    const all_patients = req.body;
    try{
        const loadAllPatients = await getAllPatients(all_patients);
        res.json(loadAllPatients);
    }catch (error){
        console.log('error fetching data',error);
    }
})

router.delete('/delete/:email',async (req,res)=>{
    const email=req.params.email;
    try {
        const delete_patient= await deletePatient(email);
        res.json(delete_patient);
    }catch (err){
        console.log(err)
    }
})

export  default router;