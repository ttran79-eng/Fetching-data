import { NextResponse } from "next/server";

// All request will be logged, ex: opening the news page will fetch all data on that page
export function middleware(request){
    console.log(request);
    return NextResponse.next();
}

// This filters all the request fetched
export const config = {
    matcher: '/news'
};