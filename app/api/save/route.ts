import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(req : Request){
    const {url} = await req.json()
    
    await sql`
        INSERT INTO images (url)
        VALUES (${url})
    `

    return NextResponse.json({message : "success"})
    
}