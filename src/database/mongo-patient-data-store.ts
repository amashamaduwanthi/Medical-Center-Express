import PatientModel from "../model/patient-model";
import Patient from "../model/Patient";

export async function PatientAdd(p:Patient) {
    console.log("Received Data:", p); // Log received data

    try {
        const newPatient = await PatientModel.create({
            name:p.name,
            age:p.age,
            email:p.email,
            condition:p.condition

        });
        console.log("Patient Added Successfully:", newPatient);
        return newPatient;
    } catch (err) {
        console.log("Error Adding Patient:", err);
    }
}
export async function getAllPatients(patients:Patient) {
    try {
        return PatientModel.find()
    } catch (err) {
        console.log("error getting patients from prisma data", err)
    }
}
export async function deletePatient(email:string){
    try {
        await PatientModel.deleteOne({
            email:email
        })
        console.log("Patient deleted email :", email)
        return email;
    }catch (err){
        console.log("Error deleting Patient",err)
    }
}