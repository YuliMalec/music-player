'use client'
import { useState,useEffect,FC } from "react"

import UploadModal from "@/components/UploadModal"
import AuthModal from '@/components/AuthModal'
import RegisterModal from "@/components/RegisterModal"


export const ModalProvider = () =>{
    const [isMounted,setIsMounted] = useState(false)

    useEffect(() => {
    setIsMounted(true)
    }, [])
    if(!isMounted){
        return null;
    }

    return( 
    <>
    <UploadModal/>
    <AuthModal/>
    <RegisterModal/>
    </>
    
    )
}