'use server';

import prisma from '@/app/lib/prima';
import { Todo } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';


export const toggleTodo=async(id:string,complete:boolean):Promise <Todo>=>{
  
    const todo= await prisma.todo.findFirst({where:{id}});

    if(!todo){
        throw `Todo con id ${id} no encontrado`
    }

    const updateTodo= await prisma.todo.update({
        where:{id},
        data:{complete}
    })
     revalidatePath('/dashboard/server-todo')
    return updateTodo;
}


export const addTodo= async (description:string)=>{
    const body={description}
    try {        
       
        const todo= await prisma.todo.create({data:body});
        revalidatePath('/dashboard/server-todo')
        return todo;
    } catch (error) {
        return {
            message:'Erro creando todo'
        };
    }
}

export const deleteCompleted=async():Promise <void>=>{
    try {            
        const todo= await prisma.todo.deleteMany({where:{complete:true}});
        revalidatePath('/dashboard/server-todo');
    } catch (error) {
        
    }
}