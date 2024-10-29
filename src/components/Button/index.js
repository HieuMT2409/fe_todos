import { FaHome } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

function Button({ title, icon, backgroundColor, iconAdd }) {
  return (
    <div
      className={`${backgroundColor ? "bg-button" : "bg-white"} hover:bg-avatar cursor-pointer flex items-center text-start py-4 pr-32 pl-6 max-w-52 ${iconAdd ? 'rounded-full' :'rounded-xl'} text-xl`}
    >
      {iconAdd ? (
        <div>
          <IoMdAdd />
        </div>
      ) : (
        <div>{icon ? <FaHome /> : <RiSettings5Fill />}</div>
      )}
      <span className="ml-2 min-w-24">{title}</span>
    </div>
  );
}

export default Button;
