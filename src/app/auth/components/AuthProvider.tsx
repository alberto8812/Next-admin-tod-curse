
'use client'

import { SessionProvider } from "next-auth/react";


interface Prop {
    children:React.ReactNode;
}

export const AuthPorivider=({children,...rest}:Prop)=> {
  return (
    <SessionProvider>
     {
        children
     }
    </SessionProvider>
  );
}