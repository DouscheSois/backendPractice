const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect to Database
connectDB();

//Middleware
app.use(express.json());

app.get("/", (req, res) => res.send("Server Running3"));

//Routes
// app.use("/auth", require("./routes/auth"));
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
// app.use("/posts", require("./routes/posts"));
// app.use("/profile", require("./routes/profile"));

const port = process.env.port || 5000;

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
