'use server'

import { loginSchema } from '@/models/schemas/schemas'
import * as z from 'zod'

export const login =async (values:z.infer<typeof loginSchema>)=>{
    const validateFields = loginSchema.safeParse(values)
   console.log(validateFields)
    if(!validateFields){
      return {message:'Invalid fields!'}
    }
  
    return {message:'Email sent!'}
}

