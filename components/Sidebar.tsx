'use client'
import React,{FC} from 'react'
import { usePathname } from 'next/navigation'
import { RiHomeHeartFill } from "react-icons/ri";
import { BsFillSearchHeartFill } from "react-icons/bs";

import { SidebarItem } from './SidebarItem';
import {Library} from './Library';
import useAuthModal from '@/hooks/useUploadModal';

interface SidebarProp{
  children:React.ReactNode
}
export const Sidebar:FC<SidebarProp> = ({
  children
}) =>{
  const pathname = usePathname()
  const authModal = useAuthModal()
  const routes = [
    {
       icon:RiHomeHeartFill,
       label:'Home',
       active:pathname !== '/search',
       href:'/'
    },
    {
      icon:BsFillSearchHeartFill,
      label:'Search',
      active:pathname === '/search',
      href:'/search'
    }
  ]


  const onChange = (open:boolean) =>{
    if(!open){
    ////reset form
      authModal.onClose()
  }
  }
  return (
    <div className={`
    flex
    
    h-full
    rounded-lg

    `}
    >
      <div className='
      flex
      flex-col
      gap-y-3
      py-3
      pl-3
      '>
      <div className='
      w-[300px]
      h-fit
    bg-neutral-600
      rounded-lg
      p-5'>
      {routes.map((item)=>(
        <SidebarItem key={item.label}{...item}/>
      ))}
      </div>
      <div className='
      h-full
       bg-neutral-600
       rounded-lg
        
       '>
      <Library />
      </div>
      </div>
      <main className='
     h-full
     flex-1
     overflow-y-auto
     p-3
     
     '>
        {children}
     </main>
    </div>
  )
}
