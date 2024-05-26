const express = require('express')
const router = express.Router();
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config({ path: "./.env" });


const db = mysql.createPool({
  user: "root",
  host: "localhost",
  password: "",
  database: "crowdfunding"
});

router.post('/', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    // res.json({ msg: "Enter email and Password First" });s
  }
  await db.query(

    "SELECT * FROM user_account where email=? ",
    [email],
    async (err, result) => {
      if (err) {
        res.json({ error: err });
      }
      if (result.length > 0) {
        if (!(await bcrypt.compare(password, result[0].password))) {
          return res.json({ msg: "Wrong Email or Password" });
        }
        else {
          const id = result[0].id;
          const email = result[0].email;
          const accessToken = jwt.sign({ id:id, email:email }, process.env.JWT_SECRET);

          res.json(accessToken);
          console.log(accessToken);
          console.log("LOGIN SUCCESSFUL");
        }

      }
      else {
        res.json({ error: "Wrong Email or Password" });
      }
    }
  );

});
module.exports = router