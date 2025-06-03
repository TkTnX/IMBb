import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest)  {
    try {
        // TODO: Получение трейлеров
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Something went wrong", status: 500 })
    }
}