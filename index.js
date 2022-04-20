const express = require("express");
const res = require("express/lib/response");
const cors = require("cors");
const app = express();
const port = process.env.POR || 5000;

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello desher Polapain-maro autorestart")
});
const users = [
    { id: 1, name: "Smith", email: "smith@gmail.com", phone: "015448887" },
    { id: 2, name: "Warner", email: "Warner@gmail.com", phone: "015448887" },
    { id: 3, name: "Labuchaign", email: "Labuchaign@gmail.com", phone: "015448887" },
    { id: 4, name: "Marsh", email: "Marsh@gmail.com", phone: "015448887" },
    { id: 5, name: "Starc", email: "Starc@gmail.com", phone: "015448887" },
    { id: 6, name: "Cummins", email: "Cummins@gmail.com", phone: "015448887" },
    { id: 6, name: "Maxwell", email: "Maxwell@gmail.com", phone: "015448887" },
]
app.get("/users", (req, res) => {
    res.send(users)
});
app.get("/user/:id", (req, res) => {
    console.log(req.params);
    // const id = req.params.id;
    // const user = users[id]
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id == id);
    res.send(user)
})
app.post("/user", (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push = user;
    res.send(user);
})
app.listen(port, () => {
    console.log('Listening to port', port);
})