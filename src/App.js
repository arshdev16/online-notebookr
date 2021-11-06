import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState"
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
  return (
    <>
       <NoteState>
        <Router>
          <Navbar />
          <div className="container pt-4">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login/>
              </Route>
              <Route exact path="/signup">
                <Signup/>
              </Route>
            </Switch>
          </div>
        </Router>
        </NoteState>
    </>
  );
}

export default App;
