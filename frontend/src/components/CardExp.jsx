import styled from "styled-components";
import Modal from "react-modal";
import { useState } from "react";
import axios from "axios";
import { Inner } from "./Inner";
import { toast } from "react-toastify";
const CardWrap = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  width: 300px;
  height: 400px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;
  /* padding: 15px; */
  border: 1px solid rgb(216, 230, 239);
  h4 {
    font-size: 16px;
    padding: 0 30px;
    margin: 0;
  }
  p {
    padding: 0 30px;
    font-size: 14px;
  }
  img {
    width: 100%;
    height: 35%;
  }
  div {
    display: flex;
    text-align: center;
    justify-content: space-around;
  }
`;
const Bot = styled.div`
  background-color: rgb(213, 234, 243);

  h5 {
    padding-top: 15px;
    margin: 15px;
  }
  div {
    display: flex;
    flex-direction: column;
    
  }
`;
const InMod = styled.div`
  text-align: center;
`;
const Cont = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  img {
    width: 65%;
    height: auto;
  }
  div {
    width: 25%;
    padding: 0 30px;
    text-align: center;
  }
  div > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
Modal.defaultStyles.content.width = "1000px";

export default function CardExp({ project }) {
  const [open, setOpen] = useState(false);
  const [donation, setDonation] = useState(0);

  const handleDonate = () => {
    let x = window.confirm("Confirm Payment");
    if (!x) {
      return;
    }
    project.pledged = Number(project.pledged) + Number(donation);
    project.investors = Number(project.investors) + 1;

    axios.post(`http://localhost:3001/handleDonation/`,
      { pledged: Number(project.pledged), investors: Number(project.investors), id: project.id, userPledged: Number(donation) },
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log(res);
        toast.success(res.data.msg);
      });
  };
  const handleDelete = () => {
    let x = window.confirm("Confirm Delete");
    if (!x) {
      return;
    }

    axios.post(`http://localhost:3001/handleDelete/`,
      { id: project.id},
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log(res);
        toast.success(res.data.msg);
      });
  };
  return (
    <div onClick={() => setOpen(true)}>
      <CardWrap>
        <img src="https://images.unsplash.com/photo-1622186477895-f2af6a0f5a97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVuZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
        <Inner>
          <h2>{project.project_name}</h2>
          <h5>Start Date: {project.start_date}</h5>
          <h5>End Date  : {project.end_date}</h5>
        </Inner>
        <Bot>
          <div>
            <h5>Goal:{project.goal}</h5>
          </div>
          <div>
            <h5>Funded:{project.pledged}</h5>
          </div>
          <div>
            <h5>Investors:{project.investors}</h5>
          </div>
        </Bot>
      </CardWrap>
      <Modal
        isOpen={open}
        onRequestClose={() => {
          setOpen(false);
        }}
      >
        <InMod>
          <Inner>

            <h1>{project.project_name}</h1>
            <Cont>
              <div>
                <p>
                  {project.pledged ? (Number(project.pledged) / Number(project.goal)).toFixed(2) * 100 : 0} % Completed
                </p>
                <h5>Start Date: {project.start_date}</h5>
                <h5>End Date  : {project.end_date}</h5>
                <h4>GOAL : {project.goal} PKR</h4>
                <div>
                  <p>Funded : {project.pledged ? project.pledged : "No donations Yet"}</p>
                </div>
                <div>
                  <p>Investors : {project.investors ? project.investors : "No Investors Yet"}</p>
                </div>
                </div>
                <div>
                <div>
                  <p>Posted By : {project.role}</p>
                </div>
                <div>
                  <p>of {project.organization_name}</p>
                </div>
                <div>
                  <p>Organization Motive: {project.details}</p>
                </div>
                <input
                  type="Number"
                  placeholder="Contribute"
                  name="donated"
                  onChange={(e) => {
                    setDonation(e.target.value);
                  }}
                />
                <button onClick={handleDonate}>DONATE</button>
                <br />
                <button onClick={handleDelete}>DELETE</button>
              </div>
            </Cont>
          </Inner>
        </InMod>
      </Modal>
    </div>
  );
}
