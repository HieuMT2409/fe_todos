import { MdOutlineCancel } from "react-icons/md";
import { postTodosAPI } from "../../../../api/todos";
import { useState } from "react";

function AddTodo({ onClose, onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("note");
  const [list, setList] = useState("Work");
  const [tag, setTag] = useState("work");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newTodo = {
      title,
      description,
      type,
      list,
      tag,
      completed: false,
    };
    try {
      const response = await postTodosAPI(newTodo);
      onAdd(response);
      onClose();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <div className="flex justify-center min-h-screen w-screen bg-black bg-opacity-50">
      <div className="relative bg-white z-60 border rounded-xl shadow-xl w-1/3 my-16 mx-24">
        <div
          onClick={onClose}
          className="absolute right-2 top-2 hover:text-cancel cursor-pointer"
        >
          <MdOutlineCancel />
        </div>
        <div className="p-10 pt-14 text-center font-semibold">New Todo</div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col text-lg px-4"
          method="post"
        >
          <input
            className="border rounded-xl outline-none my-2 p-2"
            placeholder="Name project"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="border rounded-xl outline-none my-2 p-2"
            placeholder="Descript for project"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <div className="my-2">
            <label className="mr-6 font-semibold">Type Todo</label>
            <select
              className="border p-2 rounded-xl outline-none"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value={"note"}>Note</option>
              <option value={"project"}>Project</option>
            </select>
          </div>

          <div className="my-2">
            <label className="mr-20 font-semibold">List</label>
            <select
              className="border p-2 rounded-xl outline-none"
              value={list}
              onChange={(e) => setList(e.target.value)}
            >
              <option value={"work"}>Work</option>
              <option value={"learning"}>Learning</option>
              <option value={"freelance"}>Freelance</option>
            </select>
          </div>

          <div className="my-2">
            <label className="mr-20 font-semibold">Tag</label>
            <select
              className="border p-2 rounded-xl outline-none"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            >
              <option value={"work"}>work</option>
              <option value={"daily"}>daily</option>
              <option value={"priority"}>priority</option>
            </select>
          </div>

          <div className="flex justify-center">
            <button
              className="border p-4 mt-10 w-1/3 rounded-xl bg-button hover:bg-completed"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
