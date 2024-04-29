import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addThing, doneThing } from "../redux/reducers/toDoListSlice";

const ToDoList = () => {
  const [input, setInput] = useState("");
  const toDoList = useSelector((state) => state.toDoList);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(() => e.target.value);
  };

  const clickAdd = () => {
    dispatch(addThing(input));
    setInput(() => "");
  };

  return (
    <div>
      <h2>To do list</h2>
      <input type="text" value={input} onChange={handleChange} className="border border-gray-300 rounded-md p-2"/>
      &nbsp;&nbsp;
      <button onClick={clickAdd}>Add</button>
      <br /><br />
      <h4>Things to do</h4>
      <ul>
        {toDoList.toDo.map((el, index) => (
          <li key={index}>
            {el}{" "}
            <button onClick={() => dispatch(doneThing(index))}>ready</button>
          </li>
        ))}
      </ul>
      <br />
      <h4>Things done</h4>
      <ul>
        {toDoList.done.map((el, index) => (
          <li key={index}>{el}✅</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
