import axios from "axios";
import {useState,useContext } from "react";
import { Inner } from "../Inner";
import { AuthContext } from "../../helpers/authContext";
import {toast} from 'react-toastify';


export function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const {setAuthState}=useContext(AuthContext);
  

  const style1 = {
    marginTop: "30px",
  };

  const handleOnLogin = () => {
    axios.post("http://localhost:3001/login",
    {
      email:email,
      password:password
    }).then((res)=>{
      if(res.data.error) 
      {
        toast.error(res.data.error);
      }
      else
      {
        console.log(res.data);
        localStorage.setItem("accessToken",res.data);
        
        setAuthState(true);
        toast.success("Login Successful");

      }
    })
    
      }
    

  return (
   
    <form>
      <Inner>
        <input
          style={style1}
          type="text"
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email"
        />

        <input
          style={style1}
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
        />

        <button type="submit" onClick={handleOnLogin}>LOGIN</button>
      </Inner>
    </form>
  );
}
