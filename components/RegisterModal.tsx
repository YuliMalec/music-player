
import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { registerSchema } from '@/models/schemas/schemas'
import { Modal } from './Modal'
import useRegisterModal from '@/hooks/useRegisterModal'
import { Button } from './Button'
import { Input } from './Input'
import { IoLogoGithub } from "react-icons/io";
import { FaSpotify } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import toast from 'react-hot-toast'
import { register } from '@/actions/register/register'




export default function RegisterModal() {
    const registerModal = useRegisterModal()
    const [error,setError] = useState('')
  

    const form = useForm<z.infer<typeof registerSchema>>({
      defaultValues: {
        name: "",
        email: "",
        password:""
      },
      resolver: zodResolver(registerSchema)
    })
    const onChange = (open:boolean) =>{
      if(!open){
      ////reset form
      registerModal.onClose()
    } 
    }
   

     const onSubmit = async(values:z.infer<typeof registerSchema>) =>{
             
             register(values)
             setError('')
             registerModal.onClose()
             toast.success('Registration was successful!')
     }
  return (
    <Modal 
    isOpen={registerModal.isOpen} 
    onChange={onChange}
    title='Registration form'
    description=''>
      <form  onSubmit={form.handleSubmit(onSubmit)}
      className='flex flex-col items-center'>
        <Button className='
        w-full
        bg-neutral-600
        border-2
        border-black-500
        mb-4
        hover:bg-neutral-500
        transition-all
        '>
          Sign up with 
          <div className='px-2'>
         <IoLogoGithub size={20}/>
         </div>
        </Button>
        <Button className='
        w-full
        bg-neutral-600
        border-2
        border-black-500
        mb-4
        hover:bg-neutral-500
        transition-all
        '>
          Sign up with 
          <div className='px-2'>
         <FaSpotify size={20}/>
         </div>
        </Button>
        <Button className='
        w-full
        bg-neutral-600
        border-2
        border-black-500
        mb-4
        hover:bg-neutral-500
        transition-all
        '>
          Sign up with 
          <div className='px-2'>
         <FaDiscord size={20}/>
         </div>
        </Button>
        <Input type='text'
        placeholder='Your cool name'
        {...form.register('name')}
        className='mt-4'/>
        <Input type='email'
        placeholder='Your cool email'
        {...form.register('email')}
        className='mt-6'/>
        <Input type='password'
        placeholder='Your cool password'
        {...form.register('password')}
        className='mt-4'/>
        {error && (
          <div className='text-red-600
          font-semibold
          mt-2'>{error}</div>
        )}
        <Button type='submit'
        className='bg-red-400 text-white mt-4'>Register</Button>
      </form>
     
    </Modal>
  )
}