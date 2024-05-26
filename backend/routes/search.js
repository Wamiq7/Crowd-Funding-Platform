const express = require('express')
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createPool({
    user: "root",
    host: "localhost",
    password: "",
    database: "crowdfunding"
});

router.post("/",async(req,res)=>
{
    const projectName=req.body.projectName;
    await db.query("SELECT * FROM display_details where project_name=?",
    [projectName],
    (err,result)=>{
        if(err)
        {
            console.log("DATA not Fetched");
        }
        else
        {
            res.json(result);
            console.log("DATA Fetched");
        }
    })
})

module.exports=router;