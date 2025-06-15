const express = require("express")
const app = express()

require("dotenv").config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const cors = require("cors")
app.use(cors({
    origin: " https://book-store-app-fr-six.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
  }));

require("./db/connection")

const bookRoute = require("./routes/BookRoutes")
const userRoute = require("./routes/UserRoutes")
const PORT = process.env.PORT

app.get("/", (req, res) => {
    res.send("API is running");
  });
app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT,()=>{
    console.log("App is running on port 5000")
})