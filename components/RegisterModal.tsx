
import React,{useState} from 'react'

import { Modal } from './Modal'
import useRegisterModal from '@/hooks/useRegisterModal'
import { Button } from './Button'
import { Input } from './Input'
import { IoLogoGithub } from "react-icons/io";
import { FaSpotify } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import toast from 'react-hot-toast'

export default function RegisterModal() {
    const registerModal = useRegisterModal()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const onChange = (open:boolean) =>{
      if(!open){
      ////reset form
      registerModal.onClose()
    } 
    }
     const handleSubmit = async(e:any) =>{
      e.preventDefault()
        if(!name || !email || !password){
          setError('All fields are necessary!')
          return
        }

        try{
          const res = await fetch('/api/auth/register',{
            method:'POST',
             headers:{
              'Content-Type':'application/json'
             },
             body:JSON.stringify({email,name,password})
          })
       
          if(res.ok){
           /* setName('')
            setEmail('')
            setPassword('')*/
            setError('')
            registerModal.onClose()
            toast.success('Registration was successful!')
          } else {
            throw new Error('User registration failed')
          }
        } catch(err){
          console.log(err)
            throw new Error('Error during registration')
            
        }
     }
  return (
    <Modal 
    isOpen={registerModal.isOpen} 
    onChange={onChange}
    title='Registration form'
    description=''>
      <form  onSubmit={(e)=>handleSubmit(e)}
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
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className='mt-4'/>
        <Input type='email'
        placeholder='Your cool email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className='mt-6'/>
        <Input type='password'
        placeholder='Your cool password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
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