import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres"
import bcrypt from "bcryptjs"

export async function POST(req : Request){

    try{
        const {name, email, password} = await req.json();

        const hashedPassword = await bcrypt.hash(password, 10);

        const response = await sql`
            INSERT INTO users (name, email, password)
            VALUES (${name}, ${email}, ${hashedPassword})
        `
        console.log(response)
    }
    catch(e){
        console.log(e)
    }

    return NextResponse.json({message : "success"})
}