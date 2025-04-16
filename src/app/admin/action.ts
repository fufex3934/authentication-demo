
"use server"
import { auth,clerkClient } from "@clerk/nextjs/server"
export async function setRole(formData:FormData) {
const {sessionClaims} = await auth();
    if(sessionClaims?.metadata?.role !== "admin"){
        return new Error("Not authorized");
    }

 const client = await clerkClient();
}