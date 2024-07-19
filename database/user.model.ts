import mongoose from "mongoose";
import { string } from "zod";

const UserSchema = new mongoose.Schema(
    {
        name: String,
        username: String,
        email: String,
        password: String,
        coverImage: String,
        profileImage: String,
    }, 
    {timestamps: true})

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;