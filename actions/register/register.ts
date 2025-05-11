'use server'
import User from '@/models/user'
import client, { connectMongoDB } from '@/lib/mongodb';
import { registerSchema } from '@/models/schemas/schemas'
import bcrypt from 'bcryptjs';
import * as z from 'zod'

export const register = async (values:z.infer<typeof registerSchema>) =>{
  const validateFields = registerSchema.safeParse(values)

  if(!validateFields){
    return {message:'Invalid fields!'}
  }
 
  const email = validateFields.data?.email;
  const name = validateFields.data?.name;
  const password = validateFields.data?.password;
  if(password){
   const hashedPassword = await bcrypt.hash(password,7) 
    await connectMongoDB()
           const user=  await User.create({name,email,password:hashedPassword})
           console.log(user)
  }
  
            
  return {message:'Email sent!'}
}