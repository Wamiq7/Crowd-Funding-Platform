import "./navbar.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Nav() {
  // const [ser, setSer] = useState();
  // const [me, setMe] = useState();
  useEffect(() => {
    // axios.get("https://first-server24.herokuapp.com/profile").then((res) => {
    //   setMe(res.data.name);
    // });
  }, []);
  return (
    <nav>
      <div>
        <Link to="./">
          <img
            src="data:image/png;base64,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"
            alt="Logo"
          />
        </Link>
      </div>
      <ul>
        <li>
          {/* <input
            type="text"
            name="search"
            value={ser}
            placeholder="Search"
            onChange={(e) => {
              setSer(e.target.value);
            }}
          /> */}
          <Link to="/search">
            <button>Search</button>
          </Link>
        </li>
        <li>
          <Link to="/how">
            <button>How it works</button>
          </Link>
        </li>
        <li>
          <Link to="/create">
            <button>Start a campaign</button>
          </Link>
        </li>
        <li>
          <Link to="/explore">
            <button>Explore</button>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <button>Login</button>
            {/* <button>{me === null ? "Login" : me}</button> */}
          </Link>
        </li>
        <li>
          <select>
            <option value="PKR">PKR</option>
          </select>
        </li>
      </ul>
    </nav>
  );
}
