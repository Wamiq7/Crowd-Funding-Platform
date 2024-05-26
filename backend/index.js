const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors")
const cookieParser = require('cookie-parser');

const port = 3001;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
const loginRoute = require("./routes/login.js");
app.use('/login', loginRoute);

const registerRoute = require("./routes/register.js");
app.use('/register', registerRoute);

const addDetailsRoute = require("./routes/addDetails");
app.use('/addDetails', addDetailsRoute);

const displayDetailsRoute = require("./routes/displayDetails");
app.use('/projects', displayDetailsRoute);

const searchRoute = require("./routes/search");
app.use('/search', searchRoute);

const handleDonation = require("./routes/handleDonation");
app.use('/handleDonation', handleDonation);

const handleDelete = require("./routes/handleDelete");
app.use('/handleDelete', handleDelete);


const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "crowdfunding"
});
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(port, () => {
  console.log(`Server is Running at port ${port}`);
});
