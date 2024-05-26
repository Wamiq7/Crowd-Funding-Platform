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

router.post("/", validateToken, async (req, res) => {

    const projectId = req.body.id;
   

    db.query("SET GLOBAL FOREIGN_KEY_CHECKS=0",(err)=>{
        if(err)
        {
            console.log("CHECK ERROR");
        }
        else
        {
            console.log("OFF");
        }
    })

     db.query("DELETE FROM project WHERE id= ?",
        [projectId],
        (err, result) => {
            if (err) {
                console.log("Deletion Error");
                console.log(err);

            }
            else {
                console.log("Deletion Done");

                            db.query("SET GLOBAL FOREIGN_KEY_CHECKS=1",(err)=>{
                                if(err)
                                {
                                    console.log("CHECK ERROR");
                                }
                                else
                                {
                                    console.log("ON");
                                    res.json({msg:"Deletion Successful"})
                                }
                            })
                        }

                    })

            }
)
module.exports = router;