import { useState } from "react";
import { Login } from "./Login";
import "./Main.css";
import { Register} from "./Register";

export function Main() {
  const [togle, settogle] = useState(false);

  return (
    <>
      <div id="logSignlogSign">
        <div
          style={{
            display: "flex",
            width: "90%",
            margin: "25px auto",
            justifyContent: "space-evenly",
          }}
        >
          <div
            id="logSignlog"
            onClick={() => {
              settogle(false);
            }}
          >
            {togle ? (
              <p>Log-In</p>
            ) : (
              <h3 style={{ margin: "15px auto" }}>Log-In</h3>
            )}
          </div>
          <div
            id="logSignsignup"
            onClick={() => {
              settogle(true);
            }}
          >
            {!togle ? (
              <p>Register</p>
            ) : (
              <h3 style={{ margin: "15px auto" }}>Register</h3>
            )}
          </div>
        </div>
        {togle ? <Register /> : <Login />}
      </div>
    </>
  );
}
