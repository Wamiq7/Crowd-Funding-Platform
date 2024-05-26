import React from "react";
import { logSign } from "../login/loginsignup";
import { First } from "./Firstcomp";
// import { logSign } from "./loginsignup"
// import { Log } from "./Log"
//import { logSign } from "./loginsignup"

export function logSign() {
  return (
    <>
      <img
        src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/how-it-works/t-sl.jpg"
        alt=""
        srcSet=""
      />
      <First />

      <logSign />
    </>
  );
}
