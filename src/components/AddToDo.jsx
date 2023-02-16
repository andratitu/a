import { useState } from "react";

function AddToDo({ onAddToDo }) {
	const [ToDoText, setToDoText] = useState("");
	return (
		<>
			<h3>Add new todo:</h3>
			<input
				type='text'
				value={ToDoText}
				onChange={(e) => {
					setToDoText(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					onAddToDo(ToDoText);
				}}>
				Add!
			</button>
		</>
	);
}

export default AddToDo;
