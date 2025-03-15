import PatientModel from "../model/patient-model";
import Patient from "../model/Patient";

export async function PatientAdd(p:Patient) {
    console.log("Received Data:", p); // Log received data

    try {
        const newPatient = await PatientModel.create({
            name:p.name,
            age:p.age,
            condition:p.condition

        });
        console.log("Patient Added Successfully:", newPatient);
        return newPatient;
    } catch (err) {
        console.log("Error Adding Patient:", err);
    }
}
