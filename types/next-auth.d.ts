import { CredentialProviders,Credentials } from 'next-auth/providers/credentials';
import NextAuth,{DefaultSession,DefaultUser} from "next-auth"


import { JWT } from "next-auth/jwt"

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string
  }
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      address: string
    }
  }
}

export interface Credential{
  email:string,
  password:string
}

declare module 'next-auth/providers/credentials'{
  interface Credentials{
    email:string,
    password:string,
    username:string
  }
}