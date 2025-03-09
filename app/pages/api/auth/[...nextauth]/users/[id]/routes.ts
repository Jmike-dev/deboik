import { NextResponse } from "next/server";
import User from "@/app/models/userSchema";
import dbConnect from "@/app/lib/mongodb";


export async function PUT(
    req: Request,
    { params }: { params: { id: string } },
) {
    await dbConnect();
    const { id } = params;

    try {
        const body = await req.json();
        const updatedUser = await User.findByIdAndUpdate(id, body, {
            new: true,
        });

        if (!updatedUser) {
            return NextResponse.json(
                { success: false, error: "User not found" },
                { status: 404 },
            );
        }

        return NextResponse.json(
            { success: true, data: updatedUser },
            { status: 200 },
        );
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Something went wrong";
        return NextResponse.json(
            { success: false, error: errorMessage },
            { status: 400 },
        );
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } },
) {
    await dbConnect();
    const { id } = params;

    try {
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return NextResponse.json(
                { success: false, error: "User not found" },
                { status: 404 },
            );
        }

        return NextResponse.json(
            { success: true, message: "User deleted" },
            { status: 200 },
        );
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Something went wrong";
        return NextResponse.json(
            { success: false, error: errorMessage },
            { status: 400 },
        );
    }
}
