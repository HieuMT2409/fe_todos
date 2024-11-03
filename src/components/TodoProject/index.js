import images from "../../assets/images";

function TodoProject({projects, onSelected}) {
    return ( 
        <div onClick={onSelected} className="border shadow-xl bg-white w-1/4 py-2 px-4 mt-4 mx-2 rounded-xl min-h-48 cursor-pointer">
          <div>
            <img alt="todo" className="rounded-xl mt-2 max-w-40" src={images.todo}/>
          </div>
          <div className="font-semibold text-xl mt-4 truncate max-w-40">{projects.title ? projects.title : "Name project"}</div>
          <div className="flex items-center justify-end text-sm mt-6 mr-2 pb-2">
            <span className="mr-4 bg-tag rounded-md py-1 px-2">{projects.tag ? projects.tag : "tags"}</span>
            <span className="text-semi">{projects.list ? projects.list : "lists"}</span>
          </div>
        </div>
     );
}

export default TodoProject;