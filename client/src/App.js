import { useState } from "react";
import ListTodo from "./components/ListTodo";
import DeleteTodo from "./components/DeleteTodo";
import AddTodo from "./components/AddTodo";
import UpdateTodo from "./components/UpdateTodo";

function App() {
	const [active, setActive] = useState("list-item");

	return (
		<div className="container">
			<h1 className="mt-4">ToDo App in React and Node</h1>
			<div className="m-4">
				<button
					onClick={() => {
						setActive("list-item");
					}}
					className="btn btn-primary m-3"
				>
					List Item
				</button>

				<button
					onClick={() => {
						setActive("add-item");
					}}
					className="btn btn-primary m-3"
				>
					Add Item
				</button>
				<button
					onClick={() => {
						setActive("update-item");
					}}
					className="btn btn-primary m-3"
				>
					Update Item
				</button>
				<button
					onClick={() => {
						setActive("delete-item");
					}}
					className="btn btn-danger m-3"
				>
					Delete Item
				</button>
			</div>
			{active === "list-item" && <ListTodo />}
			{active === "update-item" && <UpdateTodo />}
			{active === "delete-item" && <DeleteTodo />}
			{active === "add-item" && <AddTodo />}
		</div>
	);
}

export default App;
