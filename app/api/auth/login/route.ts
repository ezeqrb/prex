import { users } from '@/app/lib/data'
import { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(request: NextRequest) {
    const body = await request.json()
    // const formData = await request.formData()
    console.log("🚀 ~ POST ~ res:", body)

    return Response.json('OK')
}