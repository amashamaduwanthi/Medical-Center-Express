export default class Appointment{
    FullName:string;
    Date: string;
    Time:string;
    DoctorName:string;
    PatientEmail:string;

    constructor( FullName:string,Date: string,Time:string,DoctorName:string, PatientEmail:string) {
        this.FullName=FullName;
        this.Date=Date;
        this.Time=Time;
        this.DoctorName=DoctorName;
        this.PatientEmail=PatientEmail;
    }
}