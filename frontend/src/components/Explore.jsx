import axios from "axios";
import { useEffect, useState } from "react";
import CardExp from "./CardExp";
import styled from "styled-components";


export const Divi = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
`;

export default function Explore() {
  const [Data, setData] = useState([]);



  useEffect(() => {
    makeGet();
  }, []);

  const makeGet = async() => {
    await axios.get("http://localhost:3001/projects")
      .then((result) => {
        setData(result.data);
        console.log(result.data);
      });

  };


  return (
    <div>
      <Divi>
        {Data.map((project) => (
          <CardExp project={project} key={project.id}/>
        ))}
      </Divi>
    </div>
  );
}
