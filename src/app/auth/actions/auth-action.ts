/**
 * logica de las  auth aciotion
 * para crear los usario del login
 */

import prisma from "@/app/lib/prima";
import bcrypt from "bcryptjs";


export   const signInEmailPassword=async (email:string,password:string)=>{
    /**
     * validaciones
     */
    if(!email || !password) return null;
    /**
     * verficar que un usuario ya existe
     */

    const user=await prisma.user.findUnique({where:{email}})

    if(!user){
        return await createUser(email,password)
    }

    /**
     * si el usuario existe debo hacer mach con la base de datos
     */

    if(!bcrypt.compareSync(password,user.password ?? '')){
        return null
    }

    return user;
}



const createUser=async (email:string,password:string) => {
    
    const user=await prisma.user.create({
        data:{
            email,
            password:bcrypt.hashSync(password),
            name:email.split('@')[0],

        }
    });
    return user
}