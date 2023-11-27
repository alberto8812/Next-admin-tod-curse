'use client'

import { Todo } from '@prisma/client'
import  { FC } from 'react'
import { TodoItem } from './TodoItem';
import * as api from "@/todos/helpers/todo";
import { useRouter } from 'next/navigation';


interface Props{
  todos?:Todo[];

}

export const TodosGrid:FC <Props> = ({todos=[]}) => {

  const router=useRouter();
  const toggleTodo=async(id: string, complete: boolean)=>{
    /**
     * va realizar solo los componentes que van a hacer a fectados
     */

    const updatedTodo= await api.updateTodo(id,complete);
    console.log(updatedTodo)
    router.refresh();//sirve para refrescar solo este componnete de la ruta



  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
        {
            todos.map(item=>(
                <TodoItem key={item.id} todo={item} toggleTodo={toggleTodo}/>
            ))
        }
    </div>
  )
}
