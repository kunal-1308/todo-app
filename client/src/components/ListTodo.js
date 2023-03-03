import { useState, useEffect } from "react";
import axios from "axios";
function ListTodo() {
	let [todos, setTodos] = useState([]);
	useEffect(() => {
		const getAllTodos = async () => {
			todos = await axios.get("http://localhost:8080/");
			console.log(todos.data);
			setTodos(todos.data);
		};
		getAllTodos();
	}, []);
	return (
		<div>
			<h1 className="m-4">List of Todos</h1>
			<table className="table">
				<thead className="thead-dark">
					<tr>
						<th scope="col">ID</th>
						<th scope="col">ITEM</th>
					</tr>
				</thead>
				<tbody className="">
					{todos.map((n) => (
						<tr>
							<td>
								<>{n.id}</>
							</td>
							<td>
								<>{n.item}</>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export default ListTodo;
