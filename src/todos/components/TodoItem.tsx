'use client'
import { Todo } from "@prisma/client"
import { FC } from "react"

import styles from "./TodoItem.module.css";
import {  IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";



interface Props{
    todo:Todo;
    //acciones que quiero ejecutar
    toggleTodo:(id:string,complete:boolean)=>Promise<Todo | void>
}



export const TodoItem:FC <Props> = ({todo,toggleTodo}) => {
  return (
    <div className={todo.complete?styles.todoDone:styles.todoPending}>
        <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
          <button
            onClick={()=>toggleTodo(todo.id,todo.complete?false:true)}
          >
            <div className={`
                flex p-2 
                rounded-md 
                cursor-pointer 
                hover:bg-opacity-60 
              ${todo.complete?'bg-blue-100':'bg-red-100'}
            `}>
                {
                    todo.complete?
                    <IoCheckboxOutline size={30}/>
                    : <IoSquareOutline size={30}/>                    
                }
            </div>
          </button>
            <div className="text-center sm:text-left">
                {
                    todo.description
                }
            </div>
        </div>
    </div>
  )
}
