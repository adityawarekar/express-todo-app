const express = require("express");
const app = express()
const port = 5000;
const bodyParser = require("body-parser");
const uuid = require("uuid");
const cors = require("cors");

//Middleware


app.use(bodyParser.json());
app.use(cors());

const todos = [
    {
        id: 1,
        desc: "Write Python code",
        completed: false,
    },
    {
        id: 2,
        desc: "Write Javascript code",
        completed: true,
    },
];

// get , post , put , delte
app.get("/", (req, res, next) => {
    res.send("<h1>Todo List Home Page</h1>");
});

app.get("/todos", (req, res) => {
    res.json(todos);
});

app.get("/todos/:id", (req, res) => {
    console.log(req.params.id );
    let todo = todos.filter((todo) => todo.id == req.params.id);
    res.json(todo);
});

app.post("/todos", (req, res) => {
    let body = req.body;
    console.log(body);
    todos.push({ id: uuid.v4(), ...body });
    res.json(todos);
});

app.put("/todos/:id", (req, res) => {
    let todo = todos.find(todo => todo.id == req.params.id)
    if (todo) {
        todo.desc = req.body.desc 
        todo.completed = req.body.completed;
        res.json(todos);
    } else {
        res.send("Todo with given id doesn't exist");
    }
    
});

app.delete("/todos/:id", (req, res) => {
    let index = todos.findIndex((todo) => todo.id == req.params.id);
   todos.splice(index, 1);
    res.json(todos);
});
app.listen(port, () => {
    console.log("App is listening in port: ", port);
});