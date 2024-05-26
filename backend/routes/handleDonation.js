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

    const projectPledged = req.body.pledged;
    const investors = req.body.investors;
    const projectId = req.body.id;
    const userPledged = req.body.userPledged;
    const currentUser = req.user.id;

    console.log(projectId, investors, projectPledged);
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

    await db.query(`UPDATE project SET pledged= ?,investors= ? WHERE id= ?`,
        [projectPledged, investors, projectId],
        (err, result) => {
            if (err) {
                console.log("Donation Error");
                console.log(err);

            }
            else {
                console.log("Donation Done");

                db.query("INSERT INTO project_investor(project_id,user_account_id,pledged) VALUES(?,?,?)",
                    [projectId, currentUser, userPledged],
                    (err, result) => {
                        if (err) {
                            console.log("Investor Error");
                            console.log(err);
                            res.json(err);
                        }
                        else {
                            console.log("Investor data updated");
                            db.query("SET GLOBAL FOREIGN_KEY_CHECKS=1",(err)=>{
                                if(err)
                                {
                                    console.log("CHECK ERROR");
                                }
                                else
                                {
                                    console.log("ON");
                                    res.json({msg:"Fund Transfer Successful"})
                                }
                            })
                        }

                    })

            }
        })


})
module.exports = router;