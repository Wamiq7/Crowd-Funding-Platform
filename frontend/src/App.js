import { useState } from "react";
import "./App.css";
import Explore from "./components/Explore";
import { Form } from "./components/FormComp/Form";
import Nav from "./components/navbar";
import Donate from "./components/Donate";
import Landing from "./components/Landing";
import Search from "./components/search";
import { Main } from "./components/login/Main";
import { First } from "./components/how it works/Firstcomp";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "./helpers/authContext"
function App() {

  const [authState, setAuthState] = useState(false);
  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>

        <ToastContainer />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/login" >
            <Main />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/how">
            <First />
          </Route>
          <Route path="/create">
            <Form />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
        </Switch>
      </AuthContext.Provider>
    </div >
  );
}

export default App;
