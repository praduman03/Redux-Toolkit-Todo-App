import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <label>Add To Do </label>
      <input
        type="text"
        placeholder="Buy milk.."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={addTodoHandler}>Submit</button>
    </div>
  );
};

export default AddTodo;
