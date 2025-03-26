import mongoose from "mongoose";


interface IUser {
    email: string;
    password: string;
    role: string;
}

const userSchema = new mongoose.Schema<IUser>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true }
});

const User = mongoose.model<IUser>('User', userSchema);
export default User;