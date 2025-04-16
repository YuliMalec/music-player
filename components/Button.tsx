
import React,{FC} from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProp
    extends React.ButtonHTMLAttributes<HTMLButtonElement>{}


export const Button = React.forwardRef<HTMLButtonElement,ButtonProp>(({
   className,disabled,type='button',children,...prop
},ref) =>{
  return (
    <button 
    type={type}
    ref={ref}
    disabled={disabled}
    className={twMerge(
    `p-3
    flex
    justify-center
    text-sm
    font-semibold
    rounded-lg`,
    className)}
    {...prop}>{children}</button>
 
  )
} )
