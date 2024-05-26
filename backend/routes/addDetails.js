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

router.post('/', validateToken, (req, res) => {
    const partcipantRole = req.body.participantRole;
    const organizationName = req.body.organizationName;
    const organizationDetails = req.body.organizationDetails;
    const projectName = req.body.projectName;
    const projectDescription = req.body.projectDescription;
    const projectLocation = req.body.projectLocation;
    const projectStatus = req.body.projectStatus;
    const goal = req.body.goal;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const document = req.body.document;
    const materialDescription = req.body.materialDescription;
    const currentUser = req.user.id;

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
    db.query("BEGIN TRANSACTION",(err)=>{
        if(err)
        {
            console.log("START ERROR");
        }
    });
    db.query("INSERT INTO organization(organization_name,details) values(?,?)",
        [organizationName, organizationDetails],
        (err, result) => {
            if (err) {
                res.send({ error: err });
                console.log(err);
            }
            else {
                console.log("Data inserted in Organization");
                db.query("INSERT INTO participant(organization_id,user_account_id,role) values((select max(id) from organization),?,?)",
                    [currentUser, partcipantRole],
                    (err, result) => {
                        if (err) {
                            res.send({ err: err });
                            console.log(err);
                        }
                        else {
                            console.log("Data inserted in Participant");

                            db.query("INSERT INTO project(project_name,user_account_id,project_description,project_location,status,start_date,end_date,goal,organization_id) values(?,?,?,?,?,?,?,?,(SELECT max(id) from organization))"
                                , [projectName, currentUser, projectDescription, projectLocation,projectStatus,startDate, endDate, goal],
                                (err, result) => {
                                    if (err) {
                                        res.send({ err: err });
                                        console.log(err);
                                    }
                                    else {
                                        console.log("Data inserted in project");
                                        db.query("INSERT INTO material(project_id,description,link) values((SELECT max(id) FROM project),?,?)",
                                            [materialDescription, document],
                                            (err, result) => {
                                                if (err) {
                                                    res.send({ err: err });
                                                    console.log(err);
                                                }
                                                else {
                                                    console.log("Data inserted in material");
                                                    db.query("UPDATE participant SET participated_in=participated_in+1 WHERE id=(SELECT max(id) from participant)",
                                                        (err, result) => {
                                                            if (err) {
                                                                console.log(err);
                                                            }
                                                            else {
                                                                console.log("Participation Incremented");
                                                                db.query("SET GLOBAL FOREIGN_KEY_CHECKS=1",(err)=>{
                                                                    if(err)
                                                                    {
                                                                        console.log("CHECK ERROR");
                                                                    }
                                                                    else
                                                                    {
                                                                        console.log("ON");
                                                                        res.json({msg:"Project Listed Successfully"})
                                                                        db.query("COMMIT TRANSACTION",(err)=>
                                                                        {

                                                                            console.log("COMMIT ERROR");
                                                                        });
                                                                    }
                                                                })
                                                            }
                                                        })
                                                }
                                            })
                                    }


                                })
                        }
                    })
            }
        })


})
module.exports = router;