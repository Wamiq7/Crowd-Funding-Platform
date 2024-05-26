import { useState } from "react";
import { Divi } from "./Explore";
import CardExp from "./CardExp";
import { Inner } from "./Inner";
import axios from "axios";
export default function Search() {
  const [projectName, setProjectName] = useState("");
  const [flag, setflag] = useState(false);
  const [Data, setData] = useState([]);

  const makeGet = () => {
    axios.post("http://localhost:3001/search",{
      projectName: projectName,
    })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setflag(true)
      });
  };


  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "auto",
          width: "600px",
        }}
      >
        <Inner>
          <input
            type="text"
            name="search"
            placeholder="Search"
            onChange={(e) => {
              setProjectName(e.target.value);
            }}
            style={{ width: "500px", margin: "auto" }}
          />
        </Inner>
        <Inner>
          <button onClick={makeGet}>Go</button>
        </Inner>
      </div>
      <Divi>
        {Data.length === 0 && projectName !== "p" && flag ? (
          <div style={{ margin: "auto", width: "400px" }}>
            <p>OH OO, No results matching for your Search</p>

            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/pensive-face_1f614.png" alt=""
              style={{ width: "50%" }}
            />
          </div>
        ) : (
          Data.map((project) => <CardExp project={project} key={project.id} />)
        )}
      </Divi>

    </div>
  );
}
