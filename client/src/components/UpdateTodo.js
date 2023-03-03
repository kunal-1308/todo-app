import { useState } from "react";
import axios from "axios";

function UpdateTodo() {
	const [todo, setTodo] = useState("");
	const [id, setId] = useState("");

	let onSubmit = async (e) => {
		e.preventDefault();
		let update = { id: id, item: todo };

		let res = await axios.put(`http://localhost:8080/update-item/${id}`, update);
		console.log(res);
	};

	return (
		<div>
			<h1 className="m-4">Update Item</h1>
			<div>
				<form className="form-control" onSubmit={onSubmit}>
					<input
						className="form-control m-2"
						type="text"
						placeholder="Insert ID to update"
						value={id}
						onChange={(event) => setId(event.target.value)}
					/>
					<input
						className="form-control m-2"
						type="text"
						placeholder="Insert updated value"
						value={todo}
						onChange={(event) => setTodo(event.target.value)}
					/>
					<button className="btn btn-primary m-3" type="submit">
						Update
					</button>
				</form>
			</div>
		</div>
	);
}
export default UpdateTodo;
