import images from "../../assets/images";

function TodoProject() {
    return ( 
        <div className="border shadow-xl bg-white w-1/4 py-2 px-4 mt-4 mx-2 rounded-xl min-h-48">
          <div>
            <img alt="todo" className="rounded-xl mt-2" src={images.todo}/>
          </div>
          <div className="font-semibold text-xl mt-4">Name project</div>
          <div className="flex items-center justify-end text-sm mt-6 mr-2">
            <span className="mr-4 bg-tag rounded-md py-1 px-2">tags</span>
            <span className="text-semi">lists</span>
          </div>
        </div>
     );
}

export default TodoProject;