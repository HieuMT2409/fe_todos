import { IoIosAdd } from "react-icons/io";
import LightMode from "../../../LightMode";
import User from "../../../User";
import images from "../../../../assets/images";
import { deleteProjectAPI } from "../../../../api/projects";

function DetailProject({ project, onDelete, isDarkMode, toggleDarkMode }) {

  const handleChange = () => {
    console.log("handle change descript");
  };

  const handleDelete = async (id) => {
    try {
      await deleteProjectAPI(id);
      onDelete(id);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }

  return (
    <div className={`bg-white w-1/4 drop-shadow-2xl ${isDarkMode ? "dark:bg-slate-900 dark:text-white" : ""}`}>
      {/* lightmode and user */}
      <div className="flex items-center justify-end mt-4">
        <LightMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        <span className="border border-bg bg-bg h-8 mx-2"></span>
        <User />
      </div>

      {project ? (
        <>
          {/* detail project */}
          <div className="border shadow-xl rounded-xl mt-8 mx-6 h-[470px] p-4">
            <div className="text-2xl font-semibold pt-2 pb-3">
              {project.title}
            </div>
            <textarea
              onChange={handleChange}
              value={"descript for project"}
              className="border text-semi shadow-lg min-h-32 rounded-xl p-2 w-full outline-none"
            >
              {project.descript}
            </textarea>
            <div className="border border-bg my-4 mx-3"></div>
            <div>
              <div className="text-2xl font-semibold">Lists</div>
              <div className="text-xl py-2 px-6">{project.list}</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">Tags</div>
              <div className="text-xl py-2 px-6">{project.tag}</div>
            </div>

            {/* todo */}
            <div className="flex items-center justify-between mt-24 text-xl">
              <div className="font-semibold">TODO</div>
              <button className="text-4xl hover:text-button">
                <IoIosAdd />
              </button>
            </div>
            <div className="mt-4 min-h-40 max-h-40">
              <div className="flex items-center border rounded-xl p-2 mb-2">
                <input type="checkbox" />
                <span className="ml-2">title</span>
              </div>
              <div className="flex items-center border rounded-xl p-2 mb-2">
                <input type="checkbox" />
                <span className="ml-2">title</span>
              </div>
            </div>

            {/* button done and save*/}
            <div className="flex">
              <button className="border bg-button rounded-xl py-4 px-10 mr-3 hover:bg-avatar dark:bg-avatar dark:hover:bg-button|">
                Save
              </button>
              <button onClick={() => handleDelete(project.id)} className="border bg-button rounded-xl py-4 px-10 hover:bg-cancel dark:bg-avatar dark:hover:bg-button|">
                Delete
              </button>
            </div>
            <button className="border bg-button rounded-xl py-4 px-20 mt-4 hover:bg-completed dark:bg-avatar dark:hover:bg-button|">
              Mask a done
            </button>
          </div>
        </>
      ) : (
        <div className="text-xl py-4 px-8 mt-20">
          <img src={images.bg_doing} alt="bg" />
          <img src={images.title} alt="title" />
        </div>
      )}
    </div>
  );
}

export default DetailProject;
