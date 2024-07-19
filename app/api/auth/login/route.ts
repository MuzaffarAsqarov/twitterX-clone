import User from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";
import { compare } from "bcrypt";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req:Request) {
    try {
        await connectToDatabase()

        const { email, password } = await req.json()
        const isExistEmail = await User.findOne({email})
        if(!isExistEmail){
            return NextResponse.json(
                {error: "Email does not exist!"},
                { status: 400} 
            )
        }

        const isPasswordValid = await compare(password, isExistEmail.password)

        if(!isPasswordValid){
            return NextResponse.json(
                {error: "Password is not correct"},
                { status: 400}
            )
        }
    } catch (error) {
        const result = error as Error;
        return NextResponse.json({error: result.message}, {status: 400})
    }
}