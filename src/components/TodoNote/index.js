import { TbCheck } from "react-icons/tb";
import { GoTrash } from "react-icons/go";
import { deleteTodoAPI, getTodobyID, updateTodoAPI } from "../../api/todos";

function TodoNote({todos, onDelete, onUpdate, isDarkMode}) {

    const handleTrash = async (id) => {
      try {
        await deleteTodoAPI(id);
        onDelete(id);
      } catch (error) {
        console.error("Error deleting todo:", error);
      }
    }

    const handleCheck = async (id) => {
      const data = await getTodobyID(id);
      const updateTodo = {
        ...data,
        completed: true,
      };

      try {
        const respone = await updateTodoAPI(id, updateTodo);
        onUpdate(respone);
      } catch (error) {
        console.error("Error deleting todo:", error);
      }
    }

    return ( 
        <div className={`border shadow-xl ${todos.completed ? "bg-bg" : isDarkMode ? "dark:bg-slate-600 dark:border-slate-600" :"bg-white"} min-w-64 py-2 px-4 m-4 rounded-xl`}>
          <div className="text-sm mt-2">
            <span className={`mr-4 rounded-md py-1 px-2 ${todos.completed ? "line-through text-gray-500 bg-bg" : "bg-tag"}`}>{todos.tag ? todos.tag : "tag"}</span>
            <span className={`text-semi ${todos.completed ? "line-through text-gray-500" : ""}`}>{todos.list ? todos.list : "list"}</span>
          </div>
          <div className={`font-semibold text-xl mt-2 ${todos.completed ? "line-through text-gray-500" : ""}`}>{todos.title}</div>
          <div className={`mt-2 min-h-24 text-lg text-semi ${todos.completed ? "line-through text-gray-500" : ""}`}>{todos.descript ? todos.descript : "Descript for Project"}</div>
          <div className="flex justify-end text-lg">
            <span className={`mr-2 p-2 rounded-lg ${todos.completed ? "pointer-events-none" : "hover:bg-[#FB0202] cursor-pointer "}`} onClick={() => handleTrash(todos.id)}><GoTrash /></span>
            <span className={`p-2 rounded-lg ${todos.completed ? "pointer-events-none" : "hover:bg-completed cursor-pointer"}`} onClick={() => handleCheck(todos.id)}><TbCheck /></span>
          </div>
        </div>
     );
}

export default TodoNote;