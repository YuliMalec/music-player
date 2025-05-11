'use client'
import { SessionProvider } from "next-auth/react"
import { AppProps } from "next/app"

export const NextAuthProvider = ({children}:{
    children:React.ReactNode
}) =>{
return <SessionProvider>{children}</SessionProvider>
}