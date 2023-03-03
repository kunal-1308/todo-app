import axios from "axios";
import { useState } from "react";
function AddTodo() {
	const [todo, addTodo] = useState("");
	const onSubmit = async (e) => {
		e.preventDefault();
		const post = { item: todo };
		const res = await axios.post("http://localhost:8080/add-item", post);
		console.log(res);
	};
	return (
		<div>
			<h1 className="m-4">Add Item</h1>
			<form className="form-control" onSubmit={onSubmit}>
				<input
					className="form-control m-2"
					type="text"
					placeholder="Add more todo"
					onChange={(event) => {
						addTodo(event.target.value);
					}}
					value={todo}
				/>
				<button className="btn btn-primary m-3" type="submit">
					Add
				</button>
			</form>
		</div>
	);
}
export default AddTodo;
