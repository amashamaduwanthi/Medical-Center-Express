import express from "express";
import {PaymentAdd} from "../database/mongo-payment-data-store";

const router = express.Router();

router.post('/add',async (req,res)=>{
    const new_payment = req.body;
    try{
        const adding_payment = await PaymentAdd(new_payment);
        res.json(adding_payment);
    }catch (error) {
        console.log('error adding payment',error);
    }
})

export default router;
