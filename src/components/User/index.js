import { FaUserCircle  } from "react-icons/fa";

function User() {
    return ( 
        <div className="flex items-center mr-8 ">
            <div className="text-avatar bg-black rounded-full text-4xl shadow-xl">
                <FaUserCircle />
            </div>
            <span className="text-lg ml-2">username</span>
        </div>
     );
}

export default User;