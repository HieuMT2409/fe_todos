import { IoIosAdd } from "react-icons/io";
import LightMode from "../../../LightMode";
import User from "../../../User";

function DetailProject() {

  const handleChange = () => {
    console.log('handle change descript');
  }

  return (
    <div className="bg-white w-1/4">
      {/* lightmode and user */}
      <div className="flex items-center justify-end mt-4">
        <LightMode />
        <span className="border border-bg bg-bg h-8 mx-2"></span>
        <User />
      </div>

      {/* detail project */}
      <div className="border shadow-xl rounded-xl mt-8 mx-6 h-[470px] p-4">
        <div className="text-2xl font-semibold pt-2 pb-3">Project name</div>
        <textarea onChange={handleChange} value={'descript for project'} className="border text-semi shadow-lg min-h-32 rounded-xl p-2 w-full outline-none">
          Descript for project
        </textarea>
        <div className="border border-bg my-4 mx-3"></div>
        <div>
          <div className="text-2xl font-semibold">Lists</div>
          <div className="text-xl py-2 px-6">list</div>
        </div>
        <div>
          <div className="text-2xl font-semibold">Tags</div>
          <div className="text-xl py-2 px-6">tag</div>
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
        <div className="flex justify-between">
          <button className="border bg-button rounded-xl py-4 px-8 hover:bg-completed">
            Mask a done
          </button>
          <button className="border bg-button rounded-xl py-4 px-8 hover:bg-avatar">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailProject;
