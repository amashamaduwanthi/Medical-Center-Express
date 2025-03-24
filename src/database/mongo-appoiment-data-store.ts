import Appointment from "../model/Appointment";
import AppointmentModel from "../model/appoiment-modal";

export async function AppointmentAdd(a:Appointment){
    console.log('receive data',a);
    try {
       const newAppointment=await AppointmentModel.create({
            FullName:a.FullName,
            Date:a.Date,
            Time:a.Time,
            DoctorName:a.DoctorName,
            PatientEmail:a.PatientEmail
        });
        console.log("Appointment added successfully",newAppointment);
        return newAppointment;
    }catch (err) {
        console.log('adding appointment failed',err);
    }

}