import Doctor from "../model/Doctor";
import DoctorModel from "../model/doctor-model";
import Patient from "../model/Patient";
import PatientModel from "../model/patient-model";

export async function DoctorAdd(d:Doctor) {
    console.log("Received Data:", d); // Log received data

    try {
        const newDoctor = await DoctorModel.create({
            name:d.name,
            specialty:d.specialty,
            yearOfExperience:d.yearOfExperience,
            bio:d.bio

        });
        console.log("Doctor Added Successfully:", newDoctor);
        return newDoctor;
    } catch (err) {
        console.log("Error Adding Doctor:", err);
    }
}
export async function getAllDoctors(doctor:Doctor) {
    try {
        return DoctorModel.find()
    } catch (err) {
        console.log("error getting doctors from prisma data", err)
    }
}
