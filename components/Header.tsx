'use client'
import React from 'react'
import { Button } from './Button'
import useAuthModal from '@/hooks/useAuthModal'

export default function Header() {

    const authmodal = useAuthModal()

  
    
  return (
    <div className='
    flex
    justify-end
    mt-3'>
        <Button 
       
        className='bg-neutral-950
        hover:bg-neutral-900
        '
        onClick={authmodal.onOpen}
     
        >
        Sign in
        </Button>
    </div>
  )
}
