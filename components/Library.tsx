import useUploadModal from '@/hooks/useUploadModal';
import React,{FC} from 'react'
import { IoMdAdd } from "react-icons/io";
import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { options } from '@/src/app/api/auth/[...nextauth]/options';


export const Library = (
)=> {
   const session =useSession()
   if (!session) {
   console.log( "You must be logged in." )
    return
  }
   console.log(session)
  const uploadModal = useUploadModal()
  const onClick = ()=>{
    //check if user is logged in
    uploadModal.onOpen()
  }
  return (
    <div className='
    flex
     p-3
     items-center
     justify-between'>
        <h2>Library</h2>
        <button 
        onClick={onClick}><IoMdAdd size={20}/></button>
    </div>
  )
}
