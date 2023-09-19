
// The user should be given an option to create a new ToDo item from the browser.
// This item should be sent to the server. In this item, the 
// current date should be added. Now, return back the item to the browser and display it
//  (Display the item with the date).
// Make sure you create routes, public, util, and views folders

const express = require("express")
const app = express()

app.set("view engine", "ejs")


// Middleware function
app.use(express.urlencoded({extended: false}))
app.use((req, res, next) => {
	console.log(`Date: ${new Date()}`)
	console.log(`Request Method: ${req.method}`)
	console.log(`Request URL: ${req.url}`)
	next()
})
const userRouter = require("./routes/user")
app.get("/", function(req, res){
	res.send(`
	<p>Welcome!</p>
	<br>
	<a href="/user">Go to to-do page</a>
	`)
	//res.render("main")
})
app.use("/user", userRouter)

app.listen(8000)