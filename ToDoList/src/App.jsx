import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

function App() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		setTodos((prev) => [{id:Date.now(),...todo},...prev]);
	}

	const updateTodo = (id,todo) => {
		setTodos((prev) => prev.map((item) => (item.id === id ? todo : item)))
	}

	const deleteTodo = (id) => {
		setTodos((prev) => prev.filter((item) => item.id !== id));		
	}

	const toggleTodo = (id) => {
        setTodos((prev) => prev.map((item) => (item.id === id ? {...item, completed:!item.completed} : item)))
    }

	useEffect(() => {   //This useEffect is for getting the todo list items.
		const todos = JSON.parse(localStorage.getItem("todos"));    //localStorage gives you data in string form but we want the data in json format.
		if(todos && todos.length > 0){
			setTodos(todos);
		}
	},[]);

	useEffect(() => {   //This useEffect is for setting data of todo in local storage.
		localStorage.setItem("todos",JSON.stringify(todos));
	},[todos]);

	return (
		<TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleTodo}}>
		<div className="bg-[#172842] min-h-screen py-8">
			<div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
				<h1 className="text-2xl font-bold text-center mb-8 mt-2">
					Manage Your Todos
				</h1>
				<div className="mb-4"><TodoForm/></div>
				<div className="flex flex-wrap gap-y-3">
					{todos.map((todo) => (
						<div className="w-full" key={todo.id}>
							<TodoItem todo={todo}/>
						</div>
					))}
				</div>
			</div>
		</div>
		</TodoProvider>
	);
}

export default App;
