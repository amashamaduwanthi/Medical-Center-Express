import express from 'express';
import mongoose from 'mongoose';
import patientRoute from "./routes/patient-route";
import doctorRoute from "./routes/doctor-route";
import appoinmentRoutes from "./routes/appoinment-routes";
import userRoutes from "./routes/user-routes";
import dotenv from "dotenv";

import cors from 'cors';
const app = express();
dotenv.config();


mongoose.connect("mongodb://localhost:27017/healthcare")
    .then(() => console.log("✅ DB connected successfully"))
    .catch(err => console.error("❌ DB connection error:", err));

app.use(express.json());


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use('/patient', patientRoute);
app.use('/doctor',doctorRoute);
app.use('/appointment',appoinmentRoutes);
app.use('/user',userRoutes)


app.use('*', (req, res) => {
    res.status(404).json({ message: 'Not Found' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
