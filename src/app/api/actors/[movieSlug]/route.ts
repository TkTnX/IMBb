import { NextRequest, NextResponse } from "next/server"

import { movieApi } from "@/configs/axios.config"

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ movieSlug: string }> }
) {
    try {
        const movieSlug = (await params).movieSlug
        const { data } = await movieApi.get(
            `/movies/${movieSlug}/people?extended=full,images`
        )

        if (!data)
            return NextResponse.json({
                message: "Actors not found",
                status: 404
            })

        return NextResponse.json(data)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Something went wrong",
            status: 500
        })
    }
}
