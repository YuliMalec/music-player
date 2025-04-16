
import React, { useState } from 'react'

import { Modal } from './Modal'
import useAuthModal from '@/hooks/useAuthModal'
import { Button } from './Button'
import { Input } from './Input'
import { IoLogoGithub } from "react-icons/io";
import { FaSpotify } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import useRegisterModal from '@/hooks/useRegisterModal'
import {signIn} from 'next-auth/react'
import toast from 'react-hot-toast'
export default function AuthModal() {
    const authModal = useAuthModal()
    const registerModal = useRegisterModal()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const onChange = (open:boolean) =>{
      if(!open){
      ////reset form
        authModal.onClose()
    } 
    
    }
      const registerOpen = ()=>{
        authModal.onClose()
        registerModal.onOpen()
      }

      const handleSubmit =async (e:any) =>{
        e.preventDefault()
        if(!email || !password){
          setError('All fields are necessary!')
          return
        }
        try{
         
           const res = await signIn('Credentials',
           {
            email,password,
            redirect:false
           })
           if(res?.error){
            setError('Invalid credentials')
            return;
           }
           toast.success('Successfully authrized!')
           authModal.onClose();
        } catch(err){
          console.log(err)
            throw new Error('Error during authtorization')
            
        }
      }
  return (
    <Modal 
    isOpen={authModal.isOpen} 
    onChange={onChange}
    title='Sign in'
    description=''>
      <form onSubmit={(e:any)=>handleSubmit(e)}
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
          Sign in with 
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
          Sign in with 
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
          Sign in with 
          <div className='px-2'>
         <FaDiscord size={20}/>
         </div>
        </Button>
        <Input type='email'
        placeholder='Your cool email'
        className='mt-6'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        <Input type='password'
        placeholder='Your cool password'
        className='mt-4'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
        <Button type='submit' className='bg-red-400 text-white mt-4'>Sign in</Button>
      </form>
      {error && (
        <div className='
        text-red-600
        font-semibold
        mt-2'>{error}</div>
      )}
      <div className='
      flex
      items-center
      '>
        <p className='text-neutral-400'>Don't have an account yet?</p>
        <Button 
        onClick={registerOpen}
        className='underline'
        >Sign up</Button>
        </div>
    </Modal>
  )
}