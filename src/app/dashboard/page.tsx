import { WidgetItem } from "@/components";
import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboarPage() {
  /**
   * obtener la informacion del usuario
   */

  const session =await getServerSession(authOptions);

  /**
   * validacion de ruta
   */

  if(!session){
    redirect('/api/auth/signin');
  }


  return (

     <div className="grid gap-6 grid-cols-1 md:grid-cols-2 ">    
         <WidgetItem title="usuario conectado Server-side">
              {
                JSON.stringify(session.user)
              }
         </WidgetItem>

     </div>  
 
  );
}