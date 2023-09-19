const express = require("express")
const router = express.Router()

const todoItems = [] 

router.get("/", function (req, res) {
  res.render("main", { todoItems })
})

router.post("/addTodo", function (req, res) {
  const newTodo = {
    text: req.body.todoText,
    date: new Date().toLocaleString(),
  }
  todoItems.push(newTodo)
  //redirects  user to  "/user" path after adding a new item to a list to display the updated list of items
  res.redirect("/user")
})

module.exports = router
