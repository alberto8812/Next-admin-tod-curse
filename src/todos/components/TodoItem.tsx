'use client'
import { Todo } from "@prisma/client"
import { FC, startTransition } from "react"

import styles from "./TodoItem.module.css";
import {  IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
import { useOptimistic } from "react";



interface Props{
    todo:Todo;
    //acciones que quiero ejecutar
    toggleTodo:(id:string,complete:boolean)=>Promise<Todo | void>
}



export const TodoItem:FC <Props> = ({todo,toggleTodo}) => {
 
 /**
  * funcion como un use state
  */
  const [todoOptimistic,toggleOptimistic]=useOptimistic(
    todo,
    /**
     * segundo argumento llamamos un callback
     */
    (state,newCompleteValue:boolean)=>({...state,complete:newCompleteValue})
    );

    const onToggleTdo=async()=>{
      try {
        startTransition(()=> toggleOptimistic(!todoOptimistic.complete))
        await toggleTodo(todoOptimistic.id,!todoOptimistic.complete)
      } catch (error) {
        startTransition(()=> toggleOptimistic(!todoOptimistic.complete))
      }
    }



  return (
    <div className={todo.complete?styles.todoDone:styles.todoPending}>
        <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
          <button
            onClick={()=>onToggleTdo()}
          >
            <div className={`
                flex p-2 
                rounded-md 
                cursor-pointer 
                hover:bg-opacity-60 
              ${todoOptimistic.complete?'bg-blue-100':'bg-red-100'}
            `}>
                {
                    todoOptimistic.complete?
                    <IoCheckboxOutline size={30}/>
                    : <IoSquareOutline size={30}/>                    
                }
            </div>
          </button>
            <div className="text-center sm:text-left">
                {
                    todoOptimistic.description
                }
            </div>
        </div>
    </div>
  )
}
