import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import { addTodo } from "../features/todo/todoSlice";

function Addtodo() {

  const [input,setInput] = useState('');
  const dispatch = useDispatch();

  const addToDoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  } 

	return (
		<form onSubmit={addToDoHandler} className="flex flex-col items-center gap-4">
			<input
				type="text"
				placeholder="Enter Todo"
				value={input}
				onChange={(e) => {setInput(e.target.value)}}
        className="border border-black"
			/>
      <button type="submit" className="px-3 py-2 rounded-md text-white bg-green-400">Submit</button>
		</form>
	);
}

export default Addtodo;
