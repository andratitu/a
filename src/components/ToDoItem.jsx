function ToDoItem({ name, completed }) {
	return (
		<div>
			<h4>
				{name} - {completed.toString()}
			</h4>
			<button>Delete</button>
			<button
				onClick={() => {
					onComplete(index);
				}}>
				Complete
			</button>
		</div>
	);
}
export default ToDoItem;
