function TodoItem({ name, completed, onCompleteTodo }) {
	return (
		<div>
			<h4>
				{name} - {completed.toString()}
			</h4>
			<button>Delete</button>
			<button
				onClick={() => {
					onCompleteTodo(completed:true);
				}}>
				Complete
			</button>
		</div>
	);
}

export default TodoItem;
