import connectMongoDb from "@/app/lib/mongodb";
import deboikStaff from "@/app/models/deboikStaff";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
    interface User {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        phone: string;
        role: string; 
    }
    const { firstName, lastName, email, password, phone, role }:User =
        await request.json();
    await connectMongoDb();
    await deboikStaff.create({
        firstName,
        lastName,
        email,
        password,
        phone,
        role,
    });
    return NextResponse.json(
        { message: "deboik staff created" },
        { status: 201 },
    );
}

export async function GET(){
    await connectMongoDb()
    const deboikStaffs =  await deboikStaff.find()
    return NextResponse.json({deboikStaffs})
}
