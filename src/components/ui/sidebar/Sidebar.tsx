import React from 'react';

import Link from 'next/link';
import Image from "next/image";
import { CiBookmarkCheck, CiLogout } from 'react-icons/ci'
import { LogoutButton, SidebarItem } from '../..';
import { IoBaseballOutline, IoCalendarOutline, IoCheckboxOutline, IoCodeWorkingOutline, IoListOutline, IoPerson } from "react-icons/io5";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';



const menuItem=[
  {
    title:'Dashboard',
    icon:<IoCalendarOutline/>,
    path:'/dashboard',
  
  },
  {
    title:'Rest TODOS',
    icon:<IoCheckboxOutline/>,
    path:'/dashboard/rest-todo',
  
  },
  {
    title:'Server Action',
    icon:<IoListOutline/>,
    path:'/dashboard/server-todo',
  
  },
  {
    title:'Cookies page',
    icon:<IoCodeWorkingOutline/>,
    path:'/dashboard/cookies',
  
  },
  {
    title:'product page',
    icon:<IoBaseballOutline/>,
    path:'/dashboard/product',
  
  },
  {
    title:'Profile',
    icon:<IoPerson/>,
    path:'/dashboard/profile',
  
  },

];

export   const Sidebar =async () => {
  const session =await getServerSession(authOptions);
  
  const userName=(session?.user?.name)??'No Name';
  const userRoll=(session?.user?.roles)?.join(',')??'No roll';
  const avatarUrl=(session?.user?.image)?
  session.user.image
  :"https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
  ;

  
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
    <div>
      <div className="-mx-6 px-6 py-4">
        {/* TODO: Next/Link hacia dashboard */}
        <Link
         href="/dashboard" 
         >
          {/* Next/Image */}
          <Image src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg" width={50} height={50} className="w-32" alt="tailus logo"/>
        </Link>
      </div>

      <div className="mt-8 text-center">
        {/* Next/Image */}
        <Image src={avatarUrl} width={50} height={50} alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"/>
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{userName}</h5>
          <span className="hidden text-gray-400 lg:block">{userRoll}</span>
      </div>
      <ul className="space-y-2 tracking-wide mt-8">
       {
       menuItem.map(item=>(
         <SidebarItem
          {...item}
          />
       )
       )
       }
      </ul>
    </div>

    <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
     <LogoutButton/>
    </div>
  </aside>
  )
}
