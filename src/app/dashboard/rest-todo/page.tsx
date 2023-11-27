import prisma from "@/app/lib/prima";
import { TodosGrid } from "@/todos";

 
 export const metadata = {
  title: 'Listado de todos',
  description: 'SEO Title',
 };



export default  async function RestTodoPage() {
  /**
   * como se esta generando del lado del servidor 
   * no tengo que disparar un effect
   */
   const todos= await prisma.todo.findMany({orderBy:{description:'asc'}});

  return (
    <div>
      <TodosGrid todos={todos}/>
    </div>
  );
}