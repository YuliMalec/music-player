import { connectMongoDB } from '@/lib/mongodb';
import {NextAuthOptions} from 'next-auth'

import Spotify from 'next-auth/providers/spotify'
import GitHub from "next-auth/providers/github"
import Discord from "next-auth/providers/discord"
import  Credentials from 'next-auth/providers/credentials'
import "next-auth/jwt"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "../../../../../lib/mongodb"
import bcrypt from "bcryptjs"
import User from "@/models/user"


export const options:NextAuthOptions = {
  
      secret:process.env.NEXTAUTH_SECRET,
      
      providers:[
         Spotify({
          clientId:process.env.SPOTIFY_Client_id as string,
          clientSecret:process.env.SPOTIFY_Client_secret as string
         }),
         GitHub({
          clientId:process.env.GITHUB_Client_id as string,
          clientSecret:process.env.GITHUB_Client_secret as string
         }),
         Discord({
          clientId:process.env.DISCORD_Client_id as string,
          clientSecret:process.env.DISCORD_Client_secret as string
         }),
         Credentials({
          name:'Credentials',
         
            credentials: {
            
              email: {
                type:'email',
                label:'email'
              },
              password: {
                type:'password',
                label:'password'
              },
              
  
            },
          
          async authorize (credentials){
           
           const email = credentials?.email
           const password = credentials?.password
           console.log(email,password)
           if (!email || !password){
            return
           }
              try{
                await connectMongoDB()
              console.log(client)
              const user = await User.findOne({email})
              if (!user){
                return null
              }
            const passwordsMatch =  await bcrypt.compare(password,user.password)
            if(!passwordsMatch){ 
                
              return null
             
            }
            return user;
              }catch(error){
             console.log('Error:',error)
              }
          }
  
         })
      ]
   
}