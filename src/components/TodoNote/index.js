function TodoNote({tag, list, nameProject, descript}) {
    return ( 
        <div className="border shadow-xl bg-white w-1/3 py-2 px-4 mt-4 mx-2 rounded-xl">
          <div className="text-sm mt-2">
            <span className="mr-4 bg-tag rounded-md py-1 px-2">tags</span>
            <span className="text-semi">lists</span>
          </div>
          <div className="font-semibold text-xl mt-2">{nameProject}</div>
          <div className="mt-2 min-h-24 text-lg text-semi">{descript ? descript : "Descript for Project"}</div>
        </div>
     );
}

export default TodoNote;