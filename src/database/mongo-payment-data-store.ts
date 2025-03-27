import Payment from "../model/payment";
import PaymentModel from "../model/payment-model";

export async function PaymentAdd(p:Payment){
    console.log('receive data',p);
    try {
        const added_payment=await PaymentModel.create({
            AppointmentNo:p.AppointmentNo,
            PatientName:p.PatientName,
            Amount:p.Amount,
            PaymentMethod:p.PaymentMethod
        });
        console.log('Payment done',added_payment);
        return added_payment;
    }catch (error) {
        console.log('error adding payment',error);
    }
}