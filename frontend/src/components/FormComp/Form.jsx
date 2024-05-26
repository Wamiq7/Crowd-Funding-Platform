import React from "react";
import { useState } from "react";
import "./Form.css";
import { Inner } from "../Inner";
import axios from "axios";
import { toast } from "react-toastify";


export function Form() {
  const [participantRoleF, setparticipantRole] = useState("");
  const [organizationNameF, setorganizationName] = useState("");
  const [organizationDetailsF, setorganizationDetails] = useState("");
  const [projectNameF, setprojectName] = useState("");
  const [projectDescriptionF, setprojectDescription] = useState("");
  const [projectLocationF, setprojectLocation] = useState("");
  const [projectStatusF, setprojectStatus] = useState("");
  const [goalF, setGoal] = useState("");
  const [startDateF, setstartDate] = useState("");
  const [endDateF, setendDate] = useState("");
  const [documentF, setdocument] = useState("");
  const [materialDescriptionF, setmaterialDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
     if ( participantRoleF === "" ||
      organizationNameF === "" ||
      organizationDetailsF === "" ||
      projectNameF === "" ||
      projectDescriptionF === "" ||
      projectLocationF === "" ||
      projectStatusF ==="" ||
      goalF === "" ||
      startDateF === "" ||
      endDateF === ""||
      documentF === "" ||
      materialDescriptionF === ""
    ) {
      toast.error("you have to fil every section");
      return;
    }
    axios.post('http://localhost:3001/addDetails',
      {

        participantRole: participantRoleF,
        organizationDetails: organizationDetailsF,
        organizationName: organizationNameF,
        projectName: projectNameF,
        projectDescription: projectDescriptionF,
        projectLocation: projectLocationF,
        goal: goalF,
        startDate: startDateF,
        endDate: endDateF,
        document:documentF,
        materialDescription: materialDescriptionF,
        projectStatus: projectStatusF,

      },
      {
        headers:{
          accessToken:localStorage.getItem("accessToken"),
        },
      }).then((res) => {
        if(res.data.error)
        {
          console.log(res.data.error);
        }
        else
        {
        toast.success(res.data.msg);
         
        }

      }).catch((err) => {
        console.log(err);
      });


  };




  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <Inner>

          <div className="form__row">
             <h3>PARTICIPANT DETAILS</h3>
            <input
              type="text"
              name="participantRole"
              placeholder="Pariticipant Role in Organization"
              onChange={(e) => { setparticipantRole(e.target.value); }}
              className="success"

              autoComplete="off"
            /> 
             <h3>ORGANIZATION DETAILS</h3>
            <input
              type="text"
              name="organizationname"
              placeholder="Organization Name"
              onChange={(e) => { setorganizationName(e.target.value); }}
              className="success"

              autoComplete="off"
            />



            <input
              type="text"
              name="organizationdetails"
              placeholder="Organization Details...."
              onChange={(e) => { setorganizationDetails(e.target.value); }}
              className="success"

              autoComplete="off"
            />

           <h3>  PROJECT-DETAILS</h3>
            <input
              type="text"
              name="projectname"
              placeholder="Project Name"
              onChange={(e) => { setprojectName(e.target.value); }}
              className="success"
              autoComplete="off"
            />


            <input
              type="text"
              name="projectdescription"
              placeholder="Project Description *"
              onChange={(e) => { setprojectDescription(e.target.value); }}
              className="success"
              autoComplete="off"
            />
            <h4>Project Location</h4>
            <p>Write according to the following format</p>
            <input
              type="text"
              name="projectlocation"
              placeholder="KHI/PAK"
              onChange={(e) => { setprojectLocation(e.target.value); }}
              className="success"
              autoComplete="off"
            />
             <input
              type="text"
              name="projectstatus"
              placeholder="Current Status"
              onChange={(e) => { setprojectStatus(e.target.value); }}
              className="success"
              autoComplete="off"
            />



            <input
              type="number"
              name="amountrequired"
              placeholder="Amount Required / Goal"
              onChange={(e) => { setGoal(e.target.value); }}
              className="success"
              autoComplete="off"
            />
            <h4>Start Date</h4>
            <input
              type="date"
              name="startdate"
              placeholder="Start Date"
              onChange={(e) => { setstartDate(e.target.value); }}
              className="success"
              autoComplete="off"
            />
            <h4>End Date</h4>
            <input
              type="date"
              name="enddate"
              placeholder="End Date"
              onChange={(e) => { setendDate(e.target.value); }}
              className="success"
              autoComplete="off"
            /> 
            <h4>SUPPORTING-MATERIAL</h4>
            <p>Related Images / Videos</p>
            <input
              type="file"
              name="document"
              placeholder="UPLOAD"
              onChange={(e) => { setdocument(e.target.value); }}
              className="success"              
              autoComplete="off"
            /> 
            <input
              type="text"
              name="materialdescription"
              placeholder="Material Description"
              onChange={(e) => { setmaterialDescription(e.target.value); }}
              className="success"
              autoComplete="off"
            />



            <button>SUBMIT</button>
          </div>
        </Inner>
      </form>
    </div>
  );
}


