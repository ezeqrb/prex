export async function GET(request: Request) {
   
   
    return Response.json('pok')
}

export async function POST(request: Request) {
   console.log("🚀 ~ POST ~ request:", request.body)
    return Response.json('post')
}