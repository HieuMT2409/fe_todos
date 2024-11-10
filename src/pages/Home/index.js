import { IoIosAdd } from "react-icons/io";
import TodoNote from "../../components/TodoNote";
import TodoProject from "../../components/TodoProject";
import AddTodo from "../../components/Layout/DefaultLayout/AddTodo";
import { useEffect, useState } from "react";
import { getTodosAPI } from "../../api/todos";
import { getProjectsAPI } from "../../api/projects";

function Home({onSelectedProject, onDeleteProject, isDarkMode}) {
  const [isAdd, setIsAdd] = useState(false);
  const [todolist, setTodolist] = useState([]);
  const [projectlist, setProjectlist] = useState([]);

  const handleClick = () => {
    setIsAdd(true);
  };

  // call api
  useEffect(() => {
    fetchData();
    fetchDataProject();
  }, []);

  // todos
  const fetchData = async () => {
    const data = await getTodosAPI();
    setTodolist(data);
  };

  const handleLoad = async () => {
    fetchData();
    fetchDataProject();
  };

  // projects
  const fetchDataProject = async () => {
    const data = await getProjectsAPI();
    setProjectlist(data);
  };

  return (
    <div className={`mt-10 pl-4 w-full ${isDarkMode ? "dark:bg-slate-800 dark:text-white" : ""}`}>
      {/* Introduce */}
      <div className="flex">
        <div className="flex flex-col flex-1">
          <div className="text-5xl font-semibold">Today Activities</div>
          <div className="text-xl mt-1">
            Manage your habits, reminders, events, activities.
          </div>
        </div>
        <button
          onClick={() => handleClick()}
          className="flex bg-button hover:bg-avatar items-center border shadow-xl rounded-xl px-6 mr-10 dark:bg-avatar dark:hover:bg-button"
        >
          <IoIosAdd />
          <span className="text-lg">New Activity</span>
        </button>
      </div>

      {/* render todolist - todo list */}
      <div className={`mt-10`}>
        <div className="font-semibold">TODO LISTS</div>
        <div className={`flex justify-between ${todolist ? "hover:overflow-x-scroll" : "disabled:hover:overflow-x-scroll" } pl-0 p-4`}>
          {todolist.map((todo, index) => (
            <TodoNote key={index} todos={todo} onDelete={handleLoad} onUpdate={handleLoad} isDarkMode={isDarkMode}/>
          ))}
        </div>
      </div>

      {/* render todolist - project*/}
      <div className="mt-10">
        <div className="font-semibold">Projects</div>
        <div className={`flex justify-between mr-10 ${projectlist ? "hover:overflow-x-scroll" : "disabled:hover:overflow-x-scroll" } pl-0 p-4`}>
          {
            projectlist.map((project, index) => (
              <TodoProject key={index} projects={project} onSelected={() => onSelectedProject(project)} onDelete={onDeleteProject} isDarkMode={isDarkMode}/>
            ))
          }
        </div>
      </div>

      {/* render todolist - reminder */}
      <div className="mt-10">
        <div className="font-semibold">Reminder</div>
        <div className="flex items-center justify-between text-xl mr-10 my-4">
          <div className={`flex w-1/3 py-2 rounded-xl bg-white mr-4 ${isDarkMode ? "dark:bg-slate-600" :""} cursor-pointer`}>
            <div className="border border-todo border-2 mr-4"></div>
            <div>ToDo</div>
          </div>

          <div className={`flex w-1/3 py-2 rounded-xl bg-white mr-4 ${isDarkMode ? "dark:bg-slate-600" :""} cursor-pointer`}>
            <div className="border border-doing border-2 mr-4"></div>
            <div>Doing</div>
          </div>

          <div className={`flex w-1/3 py-2 rounded-xl bg-white mr-4 ${isDarkMode ? "dark:bg-slate-600" :""} cursor-pointer`}>
            <div className="border border-completed border-2 mr-4"></div>
            <div>Completed</div>
          </div>
        </div>
      </div>

      {/* Add new todolist */}
      <div className="absolute top-0 left-0 z-40">
        {isAdd && <AddTodo onClose={() => setIsAdd(false)} onAdd={handleLoad} />}
      </div>
    </div>
  );
}

export default Home;
