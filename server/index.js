const express = require("express"); // Import express
const app = express(); // Make app from express
const bcrypt = require("bcrypt");

const {router} =require('./routes/index');
// const { encodePin, compare } = require("../utils/bcrypt");

// const students = require("./routes/students"); // Import the student routes

const port = process.env.PORT || 3001; // Define port

app.use(express.json()); // enable read req.body (JSON)
// Enable req.body (URL-Encoded)
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

// app.get('/', (req, res) => res.send('Hello World!'))
/* Running this app */

const pass = "admin";
// const hash=encodePin(pass);
// const compareR= compare(pass,hash)

// console.log(pass);

// console.log(hash);

app.use("/users", getUsers);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
