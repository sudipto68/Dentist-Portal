import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
