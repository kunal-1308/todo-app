import { useState } from "react";
import axios from "axios";

function DeleteTodo() {
	const [id, setId] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();
		// let del = { id: id };
		console.log(`http://localhost:8080/delete-item/:${id}`);
		const res = await axios.delete(`http://localhost:8080/delete-item/${id}`);
		console.log(res);
	};

	return (
		<div>
			<h1 className="m-4"> Delete Item</h1>
			<form className="form-control" onSubmit={onSubmit}>
				<input
					className="form-control m-2"
					type="text"
					placeholder="Insert ID to delete"
					onChange={(event) => {
						setId(event.target.value);
					}}
				/>
				<button className="btn btn-danger m-3" type="submit">
					Delete
				</button>
			</form>
		</div>
	);
}

export default DeleteTodo;
