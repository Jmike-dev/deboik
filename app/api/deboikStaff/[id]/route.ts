import connectMongoDb from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import deboikStaff from "@/app/models/deboikStaff";

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }, 
) {
    const { id } =  await params; 
    const {
        newFirstName: firstName,
        newLastName: lastName,
        newEmail: email,
        newPhone: phone,
        newRole: role,
    } = await request.json();

    await connectMongoDb();
    await deboikStaff.findByIdAndUpdate(id, {
        firstName,
        lastName,
        email,
        phone,
        role,
    });

    return NextResponse.json({ message: "User updated" }, { status: 200 });
}
