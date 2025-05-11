import {NextResponse} from 'next/server'

import User from '@/models/user';
import bcrypt from 'bcryptjs';


export async function POST(req:any) {
    try{
        const {name,email,password} =await req.json();
        const hashedPassword = await bcrypt.hash(password,7)
      
      const user=  await User.create({name,email,password:hashedPassword})
      console.log(user)
        return NextResponse.json({message:'User registered.'},{status:201})
    }catch(error){
        return NextResponse.json({message:'An error occured while registered the user.'},{status:500})
    }
}