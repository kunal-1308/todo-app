let express = require("Express");
let cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let todos = [
	{ id: 1, item: "Wake up" },
	{ id: 2, item: "Daily meetings" },
	{ id: 3, item: "Study" },
	{ id: 4, item: "Family/friend time" },
];

app.get("/", (req, res) => {
	res.send(todos);
});

app.post("/add-item", (req, res) => {
	let additem = req.body.item;
	todos.push({
		id: todos.length + 1,
		item: additem,
	});
	res.send(todos);
});

app.put("/update-item/:id", (req, res) => {
	if (req.params.id) {
		let updateitem = todos.find((todo) => todo.id === parseInt(req.params.id));
		updateitem.item = req.body.item;
		res.send(updateitem);
	} else res.status(404).send("ID not found");
});

app.delete("/delete-item/:id", (req, res) => {
	if (req.params.id) {
		let deleteitem = todos.find((todo) => todo.id === parseInt(req.params.id));
		todos.splice(todos.indexOf(deleteitem), 1);
		res.send(todos);
	} else res.status(404).send("ID not found");
});

app.listen(8080, () => {
	console.log("Hi there");
});
