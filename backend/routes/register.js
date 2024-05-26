const mysql = require("mysql");
const express = require('express')
const router = express.Router();
const bcrypt=require("bcryptjs");


const db = mysql.createPool({
  user: "root",
  host: "localhost",
  password:"",
  database:"crowdfunding"
});
router.post('/',async (req,res)=>{
 
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const password = req.body.password;
        await db.query("SELECT email FROM user_account WHERE email=?",[email],async(err,result)=>{
          if(err)
          {
            console.log(err);
          }
          if(result.length>0)
          {
            res.json({msg:"This email is already in use"})
          }
          if(result.length==0)
          {
             let hashedPassword=await bcrypt.hash(password,5);
              db.query(
              "INSERT INTO user_account(first_name,last_name,email,password) VALUES (?,?,?,?)",
              [firstname,lastname,email,hashedPassword],
              (err,results)=> {
                if(err)
                {
                 res.send({err:err});
                }
                else
                {

                   res.json({msg:"Registered Succesfully"})
                }
              });
      
          }
        });
          
      });

module.exports=router;