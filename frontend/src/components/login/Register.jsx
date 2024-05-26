import axios from "axios";
import { useState } from "react";
import { Inner } from "../Inner";
import {toast} from 'react-toastify';


export function Register() {
  const [firstnameReg, setfirstnameReg] = useState("");
  const [lastnameReg, setlastnameReg] = useState("");
  const [emailReg, setemailReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");

  const style2 = {
    marginTop: "22px",
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      firstnameReg === "" ||
      lastnameReg === "" ||
      passwordReg === "" ||
      emailReg === ""
    ) {
      toast.error("You have to fill every section !")
      return;
    }
    axios
      .post("http://localhost:3001/register", {
        firstname:firstnameReg,
        lastname:lastnameReg,
        email:emailReg,
        password:passwordReg,

      })
      .then((res) => {
        toast.success(res.data.msg);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <form onSubmit={handleOnSubmit} >
      <Inner>
          <input
            style={style2}
            onChange={(e)=>{setfirstnameReg(e.target.value);}}
            type="text"
            placeholder="First Name"
            name="firstname"
          />
          <input
            style={style2}
            onChange={(e)=>{setlastnameReg(e.target.value);}}
            type="text"
            placeholder="Last Name"
            name="lastname"
          />

          <input
            style={style2}
            onChange={(e)=>{setemailReg(e.target.value);}}
            type="email"
            placeholder="Email"
            name="email"
          />

          <input
            style={style2}
            onChange={(e)=>{setpasswordReg(e.target.value);}}
            type="password"
            placeholder="Passsword"
            name="password"
          />
          <input style={style2} type="submit" value="Sign-Up"/>
      </Inner>
      </form>
    </>
  );
}
