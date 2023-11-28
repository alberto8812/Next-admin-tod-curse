'use client'

import { Todo } from '@prisma/client'
import  { FC } from 'react'
import { TodoItem } from './TodoItem';
import { useRouter } from 'next/navigation';
import { toggleTodo } from '../actions/todo-actions';


interface Props{
  todos?:Todo[];

}

export const TodosGrid:FC <Props> = ({todos=[]}) => {

  const router=useRouter();
  // const toggleTodo=async(id: string, complete: boolean)=>{
  //   const updatedTodo= await api.updateTodo(id,complete);
  //   console.log(updatedTodo)
  //   router.refresh();
  // }

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
