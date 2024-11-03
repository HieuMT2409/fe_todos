import Sidebar from "../../SideBar";
import Search from "../../Search";
import Home from "../../../pages/Home";
import DetailProject from "./DetailProject";
import { useState } from "react";

function DefaultLayout() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [deleteProject, setDeleteProject] = useState(null);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="relative flex bg-bg">
      {/* sidebar */}
      <Sidebar />

      {/* body */}
      <div className="w-3/5 text-3xl ml-6 mt-4">
        <div className="flex justify-between">
          <span className="w-full mr-10">
            <Search />
          </span>
        </div>
        <div>
          <Home onSelectedProject={handleSelectProject} onDeleteProject={() => setDeleteProject(true)}/>
        </div>
      </div>

      {/* detail todolist */}
      <DetailProject project={selectedProject} onDelete={() => setDeleteProject(true)}/>
    </div>
  );
}

export default DefaultLayout;
