import prisma from "@/app/lib/prima";
import { TodosGrid } from "@/todos";
import { NewTodo } from "@/todos/components/NexTodo";

 
 export const metadata = {
  title: 'Listado de todos',
  description: 'SEO Title',
 };



export default  async function serverTdoPage() {
  /**
   * como se esta generando del lado del servidor 
   * no tengo que disparar un effect
   */
   const todos= await prisma.todo.findMany({orderBy:{description:'asc'}});

  return (
    <div className="flex flex-col w-full">
      <span className="text-3xl px-3 mx-5 mb-5">Server Actions</span>
      <div className="w-full px-3 mx-5 mb-5 ">
        <NewTodo/>
      </div>
      <TodosGrid todos={todos}/>
    </div>
  );
}