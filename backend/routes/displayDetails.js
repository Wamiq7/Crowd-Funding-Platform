const express = require('express')
const router = express.Router();
const mysql = require("mysql");
const { validateToken } = require("../midlewares/authMiddleware");

const db = mysql.createPool({
    user: "root",
    host: "localhost",
    password: "",
    database: "crowdfunding"
});

router.get("/",async(req,res)=>
{
    await db.query("SELECT * FROM display_details",
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