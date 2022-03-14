const express = require("express"); 
const app = express();
const bcrypt = require("bcrypt");

const {router} =require('./routes/index');


const port = process.env.PORT || 3001; 

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));




app.use("/users", getUsers);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
