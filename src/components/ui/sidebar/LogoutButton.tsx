'use client'
import React from 'react'
import { CiLogin, CiLogout } from 'react-icons/ci'
import { useSession,signIn,signOut } from 'next-auth/react';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';

export const LogoutButton = () => {
  
    const {data:session,status}=useSession();

    if(status==='loading'){
        return(
         <div>
            <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">       
                <IoShieldCheckmarkOutline/>             
          <span className="group-hover:text-gray-700">..loading</span>
         </button>
       </div>

        )
    }
    if(status==='unauthenticated'){
        return(
         <div>
            <button 
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
            onClick={()=>signIn()}
            >       
                <CiLogin/>             
          <span className="group-hover:text-gray-700">Ingresar</span>
         </button>
       </div>

        )
    }
  
    return (
    <div>
         <button 
         className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
         onClick={()=>signOut()}
         >       
        <CiLogout/>       
        <span className="group-hover:text-gray-700">Logout</span>
      </button>
    </div>
  )
}
