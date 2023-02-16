//Library import
import { useState } from "react";

//Components import
import SearchComponent from "./SearchComponent";
import ToDoItem from "./ToDoItem";
import AddToDo from "./AddToDo";

function ToDoList() {
	const [ToDoList, setToDoList] = useState([
		{ name: "Do yoga", completed: false },
		{ name: "50 push-ups", completed: false },
		{ name: "Order pizza", completed: false },
	]);

	const handleAddToDo = (ToDoName) => {
		const newToDo = { name: ToDoName, completed: false };
		setToDoList([...ToDoList, newToDo]);
	};

	const handleCompleteToDo = (index) => {
		console.log(indexToDo);
		//se cauta todo ul si se schimba completed => true
		// se foloseste map pentru a crea un array nou
		// setToDoList(newToDoList)
	};
	return (
		<>
			<h1>ToDo List</h1>
			<SearchComponent />
			{ToDoList.map((todo, index) => (
				<ToDoItem
					name={todo.name}
					completed={todo.completed}
					key={"todo_" + index}
					onComplete={handleCompleteToDo}
					index={index}
				/>
			))}
			<AddToDo on AddToDo={handleAddToDo} />
		</>
	);
}

export default ToDoList;
