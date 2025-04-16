import React from 'react'
import { twMerge } from 'tailwind-merge'
import {forwardRef} from 'react'

interface InputProp
  extends React.InputHTMLAttributes<HTMLInputElement>{

  }

export const Input =forwardRef<HTMLInputElement,InputProp>(({
    className,type,disabled,value,...props
},ref) =>{
  return (
    <input 
    type={type}
    disabled={disabled}
    ref={ref}
    value={value}
    {...props}
    className={twMerge(
        `w-full
        focus:outline-none
        autofill:bg-neutral-700
        rounded-md
        text-sm
        p-3
        bg-neutral-700
        placeholder:text-neutral-400
        disabled:cursor-not-allowed
        disabled:opacity-50
        file:border-0
        file:bg-transparent
        file:text-sm
        file:font-medium
        `,className
    )}/>
  )
}
)
Input.displayName = 'Input';