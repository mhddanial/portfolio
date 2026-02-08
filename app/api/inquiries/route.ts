import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { inquiries, insertInquirySchema } from "@/lib/schema";
import { z } from "zod";

export async function POST(request: NextRequest) {
    try {
        const db = getDb();
        const body = await request.json();
        const input = insertInquirySchema.parse(body);

        const [inquiry] = await db.insert(inquiries).values(input).returning();

        return NextResponse.json(inquiry, { status: 201 });
    } catch (err) {
        if (err instanceof z.ZodError) {
            return NextResponse.json(
                {
                    message: err.errors[0].message,
                    field: err.errors[0].path.join('.'),
                },
                { status: 400 }
            );
        }

        console.error("Error creating inquiry:", err);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
