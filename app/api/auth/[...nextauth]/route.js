import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { connecttoDB } from "@utils/database";
import User from "@models/user";


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}){
        try{
            await connecttoDB();
            //check if a user already exists
                

            //if not create a new user

        }catch(error){
            
        }
    },
    async signIn({profile}){

    }
})

export {handler as GET, handler as POST};