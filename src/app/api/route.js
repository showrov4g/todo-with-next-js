import { NextResponse } from "next/server";
import { ConnectDB } from "../lib/config/db";

const loadDb = async()=>{
    await ConnectDB()
}
loadDb()

export async function GET(request){

    return NextResponse.json({msg: "get method hit"})
}

