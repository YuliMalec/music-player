import React,{FC} from 'react'
import { IconType } from 'react-icons'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface SidebarItemProps{
   icon:IconType,
   label:string,
   active:boolean,
   href:string
}

export const SidebarItem:FC<SidebarItemProps> = ({
    icon:Icon,label,active,href
}) =>{
  return (
    <Link href={href} 
    className={twMerge(`
    flex
    flex-row
    items-center
    font-medium
    gap-x-4
    text-md
    text-neutral-900
    transition
    w-full
    hover:text-white
    p-3
    `, active && `text-white`)}>
        <Icon size={20}/>
        <p>{label}</p>
    </Link>
  )
}
