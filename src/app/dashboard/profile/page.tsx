'use client'
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  /**
   * utilizacion el hook para traer toda la informacion 
   */
    const {data:session}=useSession();
    
  return (
    <div>
      <h1>page Profile</h1>
      <hr/>
      <div className="flex flex-col">
        <span>{session?.user?.name ?? 'No Name'}</span>
        <span>{session?.user?.email??'No Email'}</span>
        <span>{session?.user?.image ?? 'No image'}</span>

      </div>
    </div>
  );
}