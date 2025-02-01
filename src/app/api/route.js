import { NextResponse } from "next/server";

const loadDb = async()=>{
    
}


export async function GET(request){

    return NextResponse.json({msg: "get method hit"})
}

