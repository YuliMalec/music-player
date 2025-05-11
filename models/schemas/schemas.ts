import * as z from 'zod'

export const registerSchema = z
.object({
  name: z.string(),
  email: z.string().email({
    message:'Email is required!'
  }),
  password: z.string().min(1,{
    message:'Password is required!'
  })
})


export const loginSchema = z
.object({
  email: z.string().email({
    message:'Email is required!'
  }),
  password: z.string().min(1,{
    message:'Password is required!'
  })
})
