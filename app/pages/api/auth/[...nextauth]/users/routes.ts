import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/mongodb";
import User from "@/app/models/userSchema"

export async function GET() {
    await dbConnect();

    try {
        const items = await User.find({});
        return NextResponse.json(
            { success: true, data: items },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 400 });
    }
}

export async function POST(req: Request) {
    await dbConnect();

    try {
        const body = await req.json(); // Parse JSON body
        const item = await User.create(body);
        return NextResponse.json(
            { success: true, data: item },
            { status: 201 },
        );
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 400 });
    }
}
