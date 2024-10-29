import { FiSearch } from "react-icons/fi";

function Search() {
  return (
    <div
      className={
        "flex items-center border-2 rounded-full p-2 ml-2 text-sm shadow-xl bg-white text-slate-400"
      }
    >
      <span className="ml-2">
        <FiSearch />
      </span>
      <input className="ml-2 w-full outline-none text-slate-800" placeholder="Search your plan by name project, tags,..."/>
    </div>
  );
}

export default Search;
