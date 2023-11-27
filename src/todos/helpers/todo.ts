import { Todo } from "@prisma/client";



export const updateTodo=async(id:string,complete:boolean):Promise<Todo | void>=>{

    const body={complete};//todo lo que quiero mandar en mi petucion

    const dbTodo:any= await fetch(`/api/todo/${id}`,{
        method:'PUT',
        body:JSON.stringify(body),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res=>res.json);

    return dbTodo;

}
export const createTodo=async(description:string):Promise<Todo | void>=>{

    const body={description};//todo lo que quiero mandar en mi petucion

    const dbTodo:any= await fetch(`/api/todo`,{
        method:'POST',
        body:JSON.stringify(body),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res=>res.json);

    return dbTodo;

}